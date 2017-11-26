import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSelectFilterFields, filterArticles} from '../../action-creators/index';
import Select from 'react-select';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './filter.css';
import {mapToArr} from '../../helpers';

const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
};

class Filter extends Component {
    render() {
        const {filter: {selectTitles}, articles} = this.props;
        const {from, to} = this.props.filter.selectDaysRange;

        const titleOptions = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <section className='main-form block-shadow'>
                <div className='main-form__section'>
                    <span>Select title</span>
                    <Select className='select'
                            options={titleOptions}
                            value={selectTitles}
                            onChange={this.handleChange}
                            searchable
                            multi/>
                </div>
                <div className='main-form__section'>
                    <span>Select date range:</span>
                    <div className='my-day-picker'>
                        <DayPicker
                            selectedDays={[from, {from, to}]}
                            onDayClick={this.handleDayClick}
                        />
                        <p>{this.getDaysRange(from, to)}</p>
                    </div>
                </div>
            </section>
        );
    }

    handleChange = (selectTitles) => {
        const {setSelectFilterFields} = this.props;
        const selectTitlesIds = selectTitles.map(selectTitle => selectTitle.value);
        setSelectFilterFields({selectTitles: selectTitlesIds});
    };

    handleDayClick = day => {
        const {setSelectFilterFields} = this.props;
        const selectDaysRange = DateUtils.addDayToRange(day, this.props.filter.selectDaysRange);
        setSelectFilterFields({selectDaysRange});
    };

    getDaysRange = (from, to) => {
        if (from && to)
            return `Your choose: ${from.toLocaleString('en-GB', dateOptions)} - ${to.toLocaleString('en-GB', dateOptions)}`;
    };
}

export default connect((state) => ({
    filter: state.filter,
    articles: mapToArr(state.articles.entities),
}), {setSelectFilterFields})(Filter);

