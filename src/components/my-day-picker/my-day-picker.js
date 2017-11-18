import React, {Component} from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import './my-day-picker.css';

export default class MyDayPicker extends Component {
    state = {
        from: null,
        to: null
    };

    render() {
        const {from, to} = this.state;
        return (
            <div className='my-day-picker'>
                <DayPicker
                    selectedDays={[from, {from, to}]}
                    onDayClick={this.handleDayClick}
                />
                <p>{this.getRange(from, to)}</p>
            </div>
        );
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    getRange = (from, to) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        };

        if (from && to)
            return `Your choose: ${from.toLocaleString('en-GB', options)} - ${to.toLocaleString('en-GB', options)}`;
    };
}