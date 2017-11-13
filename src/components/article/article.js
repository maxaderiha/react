import React from 'react';
import PropTypes from 'prop-types';
import CommentsList from '../comment/comments-list';
import toggleOpen from '../../decorators/toggleOpen';


Article.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        text: PropTypes.string
    }).isRequired
};

const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
};

function Article({article, isOpen, toggleOpen}) {
    const text = isOpen ? 'close' : 'open';

    const date = new Date(article.date).toLocaleString('en-GB', options);

    const getBody = function () {
        if (!isOpen) return null;
        return <section>{article.text}</section>;
    };

    return (
        <article>
            <h2>{article.title}</h2>
            <p>{date}</p>
            <button onClick={toggleOpen}>{text}</button>
            {getBody()}
            <CommentsList comments={article.comments}/>
        </article>
    );
}

export default toggleOpen(Article);