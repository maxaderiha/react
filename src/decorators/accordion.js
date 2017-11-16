import React, {Component} from 'react';

export default (OriginComponent) => class Accordion extends Component {
    state = {
        openItemId: null
    };

    render() {
        return <OriginComponent {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem}/>;
    }

    toggleOpenItem = openItemId => event => {
        this.setState((prevState) => {
            if (prevState.openItemId === openItemId) {
                return {openItemId: null};
            }
            return {openItemId};
        });
    };
}