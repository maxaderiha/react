import React, {Component} from 'react';
import ArticlesList from './articles-list/articles-list';
import {articles} from '../fixtures';
import Filter from './filter/filter';
import Counter from './counter/counter';
import 'react-select/dist/react-select.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
                <Filter/>
                <ArticlesList articles={articles}/>
            </div>
        );
    }
}