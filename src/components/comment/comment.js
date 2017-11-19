import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    //from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
};

function Comment({comment}) {
    return (
        <div>
            <p>{comment.text}</p>
            <span>{comment.user}</span>
        </div>
    );
}

export default connect((state, ownProps) => {
    const comment = state.comments.find(comment => comment.id === ownProps.id);
    return {comment};
})(Comment);