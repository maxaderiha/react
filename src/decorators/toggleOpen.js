import React, {Component} from 'react';

export default (OriginComponent) => class WrapComponent extends Component {
    state = {
        isOpen: false
    };

    render() {
        return <OriginComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>;
    }

    toggleOpen = (event) => {
        event && event.preventDefault && event.preventDefault();
        this.setState(prevState => ({isOpen: !prevState.isOpen}));
    };
}