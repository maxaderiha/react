import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentsList from '../comment/comments-list';

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    };

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
            <article>
                <h2>{article.title}</h2>
                <p>{date}</p>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </article>
        );
    }

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <section>
                {article.text}
                <CommentsList comments={article.comments}/>
            </section>
        );
    }
}
