import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../../action-creators/index';

class Counter extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleClick}>Increment me</button>
            </div>
        );
    }

    handleClick = () => {
        console.log('inc');
        this.props.increment();
    };
}

Counter.propTypes = {
    counter: PropTypes.number
};

// function mapStateToProps(state) {
//     return {
//         counter: state.count
//     };
// }
//
// const mapToDispatch = {increment};

export default connect(state => ({counter: state.count}), {increment})(Counter);
