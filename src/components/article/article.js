import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentsList from '../comments-list/comments-list';
import CommentForm from '../comment-form/comment-form';
import {CSSTransitionGroup} from 'react-transition-group';
import './article.css';

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            date: PropTypes.string,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
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
            <article className='article'>
                <h2 className='article__title'>{article.title}</h2>
                <p className='article__date'>{date}</p>
                <button className='btn' onClick={toggleOpen}>{text}</button>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={300}>
                    {this.getBody()}
                </CSSTransitionGroup>
            </article>
        );
    }

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
