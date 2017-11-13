import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';

export default class CommentsList extends Component {
    static defaultProps = {
        comments: []
    };

    static propTypes = {
        comments: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const text = this.state.isOpen ? 'hide comments' : 'show comments';
        return (
            <section>
                <button onClick={this.toggleOpen}>{text}</button>
                {this.getBody()}
            </section>
        );
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {comments} = this.props;
        if (!comments.length) return <p>No comments ...</p>;
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        );
    }

    toggleOpen = (event) => {
        event.preventDefault();
        this.setState(prevState => ({isOpen: !prevState.isOpen}));
    };
}