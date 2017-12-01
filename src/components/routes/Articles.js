import React, {Component} from 'react';
import ArticlesList from '../articles-list/articles-list';
import Article from '../article/article';
import {Route} from 'react-router-dom';


class Articles extends Component {
    render() {
        return (
            <div>
                <ArticlesList/>
                <Route path='/articles' children={this.getTitle} exact/>
                <Route path='/articles/:id' render={this.getArticle}/>
            </div>
        );
    }

    getTitle = ({match}) => {
        if (!match) return <h2>Article page:</h2>;
        return <h2>Please, select article</h2>
    };

    getArticle = ({match}) => {
        const {params: {id}} = match;
        return <Article id={id} isOpen key={id}/>
    }
}

export default Articles;
