import React from 'react';
import Header from '../common/header/Header';
import Beer from "../main/beers/Beer"

// import { dummyBeersData } from "../../constants/dummyData";
import { connect } from 'react-redux';

class Favourites extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchFor: "",
        };
    }

    setSearchText = (searchText) =>{
        this.setState({
            searchFor: searchText,
        });
    };

    render() {
        let  { favouriteBeers } = this.props;

        if(!!this.state.searchFor){
            favouriteBeers = favouriteBeers.filter((beer) => 
                beer.name.toLowerCase().includes(this.state.searchFor.toLowerCase())
            );
        }
        
        return (
            <div className="wrapper">
                <Header setSearchText={this.setSearchText} />

                <main>
                    <div className="container">
                        {!!favouriteBeers.length &&
                            favouriteBeers.map((beer) => <Beer key={beer.id} info={beer} /> )}
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = ({ favouriteBeersReducer }) => {
    return { favouriteBeers: favouriteBeersReducer.favouriteBeers };

};


export default connect(mapStateToProps)(Favourites);