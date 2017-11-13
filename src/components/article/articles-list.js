import React from 'react';
import Article from './article';
import PropTypes from 'prop-types';

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default function ArticlesList({articles}) {
    const listElements = articles.map(article => <li key={article.id}><Article article={article}/></li>);

    return (
        <ul>
            {listElements}
        </ul>
    );
}