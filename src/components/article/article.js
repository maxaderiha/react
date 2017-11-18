import React, {Component} from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteArticle} from '../../action-creators/index';
import CommentsList from '../comments-list/comments-list';
import CommentForm from '../comment-form/comment-form';
import './article.css';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            date: PropTypes.string,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired,
        //from connect
        deleteArticle: PropTypes.func.isRequired
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.isOpen !== nextProps.isOpen;
    // }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const text = isOpen ? 'close' : 'open';

        const options = {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        };
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
        console.log('delete');
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
    };

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <section>
                <p className='article__content'>{article.text}</p>
                <CommentForm/>
                <CommentsList comments={article.comments}/>
            </section>
        );
    }
}

export default connect(null, {deleteArticle})(Article);