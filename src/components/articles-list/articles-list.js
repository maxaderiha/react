import React, {Component} from 'react';
import Article from '../article/article';
import PropTypes from 'prop-types';
import accordion from '../../decorators/accordion';
import {connect} from 'react-redux';
import {filtrateArticlesSelector} from '../../selectors/index';
import {loadAllArticles} from '../../action-creators/index';
import './articles-list.css';

class ArticlesList extends Component {
    static propTypes = {
        //from connect
        articlesIds: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.loadAllArticles();
    }

    render() {
        const {articlesIds, openItemId: openArticleId, toggleOpenItem: toggleOpenArticle} = this.props;

        const listElements = articlesIds.map(articleId => <li key={articleId}>
            <Article
                id={articleId}
                isOpen={articleId === openArticleId}
                toggleOpen={toggleOpenArticle(articleId)}
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
    const result = filtrateArticlesSelector(state);
    return {articlesIds: result};
}, {loadAllArticles})(accordion(ArticlesList));

