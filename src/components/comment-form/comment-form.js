import React, {Component} from 'react';
import './comment-form.css';

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
};

export default class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    };

    render() {
        return (
            <section>
                <h4>Add comment</h4>
                <form className="comment-form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.user}
                        name="user"
                        className={this.getClassName('user')}
                        placeholder='Author'
                    />
                    <textarea
                        value={this.state.text}
                        name="text"
                        className={this.getClassName('text')}
                        placeholder='Write your comment'
                    />
                    <button className="btn" type="submit">submit</button>
                </form>
            </section>
        );
    }

    getClassName = (type) => {
        const length = this.state[type].length;
        return length < limits[type].min || length > limits[type].max ? 'comment-form_error' : '';
    };

    handleChange = (event) => {
        event.preventDefault();
        let {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        alert(`${this.state.user} and ${this.state.text} was submitted.`);
        event.preventDefault();
    };
}