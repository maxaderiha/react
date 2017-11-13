import React, {Component} from 'react';
import CommentsList from '../comment/comments-list';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };
    }

    render() {
        const {article} = this.props;
        const text = this.state.isOpen ? 'close' : 'open';

        return (
            <article>
                <h2>{article.title}</h2>
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
