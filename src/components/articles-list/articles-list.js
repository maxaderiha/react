import React, {Component} from 'react';
import Article from '../article/article';
import PropTypes from 'prop-types';
import accordion from '../../decorators/accordion';
import {connect} from 'react-redux';
import {filtrateArticlesSelector} from '../../selectors/index';
import {loadAllArticles} from '../../action-creators/index';
import Loader from '../loader/loader';
import './articles-list.css';

class ArticlesList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    };

    componentDidMount() {
        const {loaded, loading, loadAllArticles} = this.props;
        if (!loaded && !loading) loadAllArticles();
    }

    render() {
        const {
            articles,
            loading,
            openItemId: openArticleId,
            toggleOpenItem: toggleOpenArticle
        } = this.props;

        if (loading) return <Loader/>;

        const listElements = articles.map(article => <li key={article.id}>
            <Article
                id={article.id}
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
    return {
        articles: filtrateArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded,
    };
}, {loadAllArticles})(accordion(ArticlesList));

