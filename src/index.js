import React from 'react';
import {render} from 'react-dom';
import ArticleList from './components/articles-list/articles-list';
import {articles} from './fixtures';


render(<ArticleList articles={articles}/>, document.querySelector('#container'));
