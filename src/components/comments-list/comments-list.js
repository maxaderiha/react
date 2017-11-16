import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/comment';
import toggleOpen from '../../decorators/toggle-open';

CommentsList.propTypes = {
    comments: PropTypes.array,
    //from toggleOpen
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
};

function CommentsList({comments = [], isOpen, toggleOpen}) {
    const text = isOpen ? 'hide comments' : 'show comments';

    return (
        <section>
            <button className="btn" onClick={toggleOpen}>{text}</button>
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