import React, {Component} from 'react';
import ArticlesList from './articles-list/articles-list';
import Filter from './filter/filter';
import Counter from './counter/counter';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import 'react-select/dist/react-select.css';


export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <section>
                        <h2>Menu</h2>
                        <ul>
                            <li>
                                <NavLink activeStyle={{color: 'red'}} to='/counter'>Counter</NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{color: 'red'}} to='/filter'>Filter</NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{color: 'red'}} to='/articles'>Articles</NavLink>
                            </li>
                        </ul>
                    </section>
                    <Route path='/counter' component={Counter}/>
                    <Route path='/filter' component={Filter}/>
                    <Route path='/articles' component={ArticlesList}/>
                </div>
            </Router>
        );
    }
}