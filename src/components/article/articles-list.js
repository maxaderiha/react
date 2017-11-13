import React from 'react';
import Article from './article';

export default function ArticlesList({articles}) {
    const listElements = articles.map(article => <li key={article.id}><Article article={article}/></li>);

    return (
        <ul>
            {listElements}
        </ul>
    );
}