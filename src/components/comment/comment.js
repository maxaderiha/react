import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({comment}) {
    return (
        <div>
            <p>{comment.text}</p>
            <span>{comment.user}</span>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
};