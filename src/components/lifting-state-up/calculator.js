import React, {Component} from 'react';
import BoilingVerdict from './boiling-verdict';
import TemperatureInput from './temperature-input';

export default class Calculator extends Component {
    state = {
        temperature: '',
        scale: 'c'
    };

    render() {
        const {scale, temperature} = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div className="block-shadow">
                <TemperatureInput
                    scale='f'
                    temperature={fahrenheit}
                    handleChange={this.handleChange}
                />
                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    handleChange={this.handleChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}/>
            </div>
        );
    }

    handleChange = (scale) => (event) => {
        const temperature = event.target.value;
        this.setState({temperature, scale});
    };
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}