import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import toggleOpen from '../../decorators/toggleOpen';

class CommentsList extends Component {
    static defaultProps = {
        comments: []
    };

    static propTypes = {
        comments: PropTypes.array.isRequired
    };

    render() {
        const {isOpen, toggleOpen} = this.props;

        const text = isOpen ? 'hide comments' : 'show comments';
        return (
            <section>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </section>
        );
    }

    getBody() {
        const {comments, isOpen} = this.props;
        if (!isOpen) return null;
        if (!comments.length) return <p>No comments ...</p>;
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        );
    }
}

export default toggleOpen(CommentsList);