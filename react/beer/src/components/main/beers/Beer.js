import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
// import {  Counter } from "../../common"
import BeerModal from './BeerModal';
// import { dummyBeersData as favourites } from "../../../constants/dummyData";
import {  bindActionCreators } from "redux";
import { favouriteBeersActions } from '../../../actions';

class Beer extends Component {
    constructor(props){
        super(props);

        this.state = {
            // isFavorite: false,
            showModal: false,
        };
    }
    
    handleModalOpen =() => {
        this.setState({
            showModal: true,
        });
    };

    handleModalClose =() => {
        this.setState({
            showModal: false,
        });
    };

    toggleFavourite = () => {
        const { info, favouriteBeers, addFavouriteBeer, removeFavouriteBeer } = this.props;
            const beerIndex = favouriteBeers.findIndex(
                (beer) => beer.id === info.id);

            if (beerIndex > -1) {
                removeFavouriteBeer(info.id);
            }
            else {
                addFavouriteBeer(info);
            }
       
    }

    render(){
        // const { isFavourite } = this.state;
        const { showModal } = this.state;
        const { id, name, description, image_url} = this.props.info;
        const beerIndex = this.props.favouriteBeers.findIndex(
            (beer) => beer.id === id);
        
        return(
            <Fragment>
                {/* <Counter /> */}
            {showModal && (
                <BeerModal
                    show={showModal} 
                    handleClose={this.handleModalClose} 
                    beerId={id}
                /> 
            )}
            
            <div className="card">
                <span className={`favourite ${beerIndex > -1 ? "active" : "" }`}>
                    <i className={`${beerIndex > -1 ? "fas" : "far"} fa-star`}  
                    onClick={this.toggleFavourite} 
                    />
                </span>
                <div
                 className="card__imgcontainer" 
                 style={{backgroundImage : `url(${image_url})` }}
                />
               <h2 onClick={this.handleModalOpen}> {name}</h2>
            
               <span className="card__description"> {description}  </span>
            </div>  
            </Fragment>
        );
    }
}

Beer.propTypes = {
    info: PropTypes.shape ({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = ({ favouriteBeersReducer }) => {
    return {
        favouriteBeers: favouriteBeersReducer.favouriteBeers,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ ...favouriteBeersActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Beer);