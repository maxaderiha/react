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

    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };
    }

    render() {
        const {article} = this.props;
        const text = this.state.isOpen ? 'close' : 'open';

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
                <button onClick={this.toggleOpen}>{text}</button>
                {this.getBody()}
                <CommentsList comments={article.comments}/>
            </article>
        );
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {article} = this.props;
        return <section>{article.text}</section>;
    }

    toggleOpen = (event) => {
        event.preventDefault();
        this.setState(prevState => ({isOpen: !prevState.isOpen}));
    };
}
