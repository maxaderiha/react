import React, {Component} from 'react';

export default (OriginComponent) => class WrapComponent extends Component {
    state = {
        isOpen: false
    };

    render() {
        return <OriginComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>;
    }

    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState(prevState => ({isOpen: !prevState.isOpen}));
    };
}