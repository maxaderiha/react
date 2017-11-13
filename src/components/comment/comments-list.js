import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import toggleOpen from '../../decorators/toggleOpen';

CommentsList.propTypes = {
    comments: PropTypes.array
};

function CommentsList({comments, isOpen, toggleOpen}) {
    const text = isOpen ? 'hide comments' : 'show comments';

    const getBody = function () {
        if (!isOpen) return null;
        if (!comments.length) return <p>No comments ...</p>;
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        );
    };

    return (
        <section>
            <button onClick={toggleOpen}>{text}</button>
            {getBody()}
        </section>
    );
}

export default toggleOpen(CommentsList);