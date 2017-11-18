import React, {Component} from 'react';

const scaleNames = {
    f: 'Fahrenheit',
    c: 'Celsius',
};

export default class TemperatureInput extends Component {
    render() {
        const {scale, temperature, handleChange} = this.props;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input
                    value={temperature}
                    onChange={handleChange(scale)}
                />
            </fieldset>
        );
    }
}