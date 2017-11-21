import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addComment} from '../../action-creators/index';
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

class CommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired,
    };

    state = {
        user: '',
        text: '',
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

    validateForm() {
        let status = true;
        for (const fieldName in this.state) {
            const length = this.state[fieldName].length;

            if (length < limits[fieldName].min || length > limits[fieldName].max) {
                alert(`Incorrect ${fieldName} data`);
                status = false;
            }
        }
        return status;
    }

    handleSubmit = (event) => {
        const {user, text} = this.state;
        const {addComment, articleId} = this.props;
        event.preventDefault();
        if (this.validateForm()) {
            addComment(user, text, articleId);
        }
    };
}

export default connect(null, {addComment})(CommentForm);