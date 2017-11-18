import React, {Component} from 'react';
import ArticlesList from './articles-list/articles-list';
import {articles} from '../fixtures';
import MainForm from './main-form/main-form';
import 'react-select/dist/react-select.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <MainForm/>
                <ArticlesList articles={articles}/>
            </div>
        );
    }
}