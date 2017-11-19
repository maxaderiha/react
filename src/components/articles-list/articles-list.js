import React, {Component} from 'react';
import Article from '../article/article';
import PropTypes from 'prop-types';
import accordion from '../../decorators/accordion';
import {connect} from 'react-redux';
import {filtrateArticlesSelector} from '../../selectors/index';
import './articles-list.css';

class ArticlesList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    };

    render() {
        const {articles, openItemId: openArticleId, toggleOpenItem: toggleOpenArticle} = this.props;

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
}

export default connect(state => {
    return {articles: filtrateArticlesSelector(state)};
})(accordion(ArticlesList));

