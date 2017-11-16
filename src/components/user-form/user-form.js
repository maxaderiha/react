import React, {Component} from 'react';

export default class UserForm extends Component {
    state = {
        userName: ''
    };

    render() {
        return (
            <div>
                Name: <input type="text" value={this.state.userName} onChange={this.handleUserChange}/>
                AfterChange: {this.state.userName}
            </div>
        );
    }

    handleUserChange = (event) => {
        this.setState({
            userName: event.target.value
        });
    };
}