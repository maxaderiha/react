import React, {Component} from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteArticle, loadArticle} from '../../action-creators/index';
import CommentsList from '../comments-list/comments-list';
import CommentForm from '../comment-form/comment-form';
import {articlesSelectorFactory} from '../../selectors/index';
import Loader from '../loader/loader';
import './article.css';


const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
};

class Article extends Component {
    componentDidMount() {
        const {loadArticle, article, id} = this.props;
        if (!article || (!article.text && !article.loading)) loadArticle(id);
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        if (!article) return null;
        const text = isOpen ? 'close' : 'open';


        const date = new Date(article.date).toLocaleString('en-GB', options);

        return (
            <article className='article block-shadow'>
                <h2 className='article__title'>{article.title}</h2>
                <p className='article__date'>{date}</p>
                <button className='btn' onClick={toggleOpen}>{text}</button>
                <button className='btn btn_delete' onClick={this.handleDelete}>delete</button>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={300}>
                    {this.getBody()}
                </CSSTransitionGroup>
            </article>
        );
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
    };

    getBody() {
        const {id, article, isOpen} = this.props;
        if (!isOpen) return null;
        if (article.loading) return <Loader/>;
        return (
            <section>
                <p className='article__content'>{article.text}</p>
                <CommentForm articleId={id}/>
                <CommentsList article={article}/>
            </section>
        );
    }
}

const mapStateToProps = () => {
    const articleSelector = articlesSelectorFactory();

    return (state, ownProps) => {
        return {article: articleSelector(state, ownProps)};
    };
};

export default connect(mapStateToProps, {deleteArticle, loadArticle})(Article);