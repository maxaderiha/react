import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import toggleOpen from '../../decorators/toggleOpen';

CommentsList.propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
};

function CommentsList({comments = [], isOpen, toggleOpen}) {
    const text = isOpen ? 'hide comments' : 'show comments';

    return (
        <section>
            <button onClick={toggleOpen}>{text}</button>
            {getBody(comments, isOpen)}
        </section>
    );
}

function getBody(comments, isOpen) {
    if (!isOpen) return null;
    if (!comments.length) return <p>No comments ...</p>;
    return (
        <ul>
            {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
        </ul>
    );
}

export default toggleOpen(CommentsList);