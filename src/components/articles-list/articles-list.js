import React from 'react';
import Article from '../article/article';
import PropTypes from 'prop-types';
import accordion from '../../decorators/accordion';
import './articles-list.css';

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
};

function ArticlesList({articles, openItemId: openArticleId, toggleOpenItem: toggleOpenArticle}) {
    const listElements = articles.map(article => <li key={article.id}>
        <Article
            article={article}
            isOpen={article.id === openArticleId}
            toggleOpen={toggleOpenArticle(article.id)}
        />
    </li>);

    return (
        <ul className='articles-list'>
            {listElements}
        </ul>
    );
}

export default accordion(ArticlesList);