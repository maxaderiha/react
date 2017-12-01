import React, {Component} from 'react';
import Articles from './routes/Articles';
import NewArticle from './routes/new-article';
import NotFound from './routes/not-found';
import Filter from './filter/filter';
import Counter from './counter/counter';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
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
                    <Switch>
                        <Route path='/counter' component={Counter}/>
                        <Route path='/filter' component={Filter}/>
                        <Route path='/articles/new' component={NewArticle}/>
                        <Route path='/articles' component={Articles}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}