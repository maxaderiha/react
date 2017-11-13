import React from 'react';
import Article from './article';
import PropTypes from 'prop-types';
import accordion from '../../decorators/accordion';

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired
};

function ArticlesList({articles, openArticleId, toggleOpenArticle}) {
    const listElements = articles.map(article => <li key={article.id}>
        <Article
            article={article}
            isOpen={article.id === openArticleId}
            toggleOpen={toggleOpenArticle(article.id)}
        />
    </li>);

    return (
        <ul>
            {listElements}
        </ul>
    );
}

export default accordion(ArticlesList);