import React, {Component} from 'react';
import Select from 'react-select';
import UserForm from '../user-form/user-form';
import MyDayPicker from '../my-day-picker/my-day-picker';
import {articles} from '../../fixtures';
import './main-form.css';

const options = articles.map(article => ({
    label: article.title,
    value: article.id
}));

export default class MainForm extends Component {
    state = {
        selection: null
    };

    render() {
        return (
            <section className='main-form block-shadow'>
                <div className='main-form__section'>
                    <span>Title</span>
                    <Select className='select'
                            options={options}
                            value={this.state.selection}
                            onChange={this.changeSelection}
                            searchable
                            multi/>
                </div>
                <div className='main-form__section'>
                    <span>Date:</span>
                    <MyDayPicker/>
                </div>
            </section>
        );
    }

    changeSelection = selection => this.setState({selection});
}