import React, {Component} from 'react';

export default (OriginArticlesList) => class WrapArticlesList extends Component {
    state = {
        openArticleId: null
    };

    render() {
        return <OriginArticlesList {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle}/>;
    }

    toggleOpenArticle = openArticleId => event => {
        event && event.preventDefault && event.preventDefault();
        this.setState({openArticleId});
    };
}