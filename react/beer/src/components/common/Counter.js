import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { counterActions,  } from "../../actions";
//dateActions

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count,
        };
    }

    handleIncrease = () => {
        this.setState({
            count: this.props.count + 1,
        }, () => {
            this.props.increaseCount();
            // this.props.addDate();
        });
    }
    handleDecrease = () => {
        this.setState({
            count: this.props.count - 1,
        }, () => {
            this.props.decreaseCount();
            // this.props.removeDate();
        });
    }
    handleModify = () => {
        const newValue = Math.floor(Math.random());
        this.setState({
            count: newValue,
        }, () => {
            this.props.modifyCount(newValue);
        });
    }

    render() {
        const { count } = this.state;
        // const { increaseCount, decreaseCount } = this.props;
    
    return(

    <div>
        <p>
           <span onClick={this.handleModify}>Counter {count}</span>
           <button 
            style={{ 
            clear: "both",
            position: "relative",
            padding: "10px",
            margin: "10px",
        }}
          onClick = {this.handleIncrease}>+</button>
        <button 
        style={{ 
            clear: "both",
            position: "relative",
            padding: "10px",
            margin: "10px"
        }}
        onClick = {this.handleDecrease}>-</button>
        </p>
    </div>
);
}}
const mapStateToProps = ({ counterReducer }) => {
    return {
        count: counterReducer.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //most effective way
        ...bindActionCreators({ ...counterActions }, dispatch),

        //...dateActions
        //map to an object first
        //actions bindActionCreators({ ...counterActions }, dispatch)

        //actions: {
            //increaseCount: () => {},
            //decreaseCount: () => {},
            //modifyCount: (value) => {},
        }
    };

    
export default connect(mapStateToProps, mapDispatchToProps)(Counter);