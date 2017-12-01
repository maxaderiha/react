import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtrateArticlesSelector} from '../../selectors/index';
import {loadAllArticles} from '../../action-creators/index';
import Loader from '../loader/loader';
import {NavLink} from 'react-router-dom';
import './articles-list.css';


class ArticlesList extends Component {
    componentDidMount() {
        const {loaded, loading, loadAllArticles} = this.props;
        if (!loaded && !loading) loadAllArticles();
    }

    render() {
        console.log('list update');
        const {articles, loading,} = this.props;

        if (loading) return <Loader/>;

        const listElements = articles.map(article => <li key={article.id}>
            <NavLink to={`/articles/${article.id}`}>
                {article.title}
            </NavLink>
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
}, {loadAllArticles})(ArticlesList);

