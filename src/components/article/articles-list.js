import React, {Component} from 'react';
import Article from './article';
import PropTypes from 'prop-types';

export default class ArticlesList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        openArticleId: null
    };

    render() {
        const {articles} = this.props;
        const listElements = articles.map(article => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id === this.state.openArticleId}
                toggleOpen={this.toggleOpenArticle(article.id)}
            />
        </li>);

        return (
            <ul>
                {listElements}
            </ul>
        );
    }

    toggleOpenArticle = openArticleId => ev => {
        this.setState({openArticleId});
    };
}