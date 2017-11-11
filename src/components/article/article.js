import React, {Component} from 'react';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
            <article>
                <h2>{article.title}</h2>
                <button onClick={this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </article>
        );
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {article} = this.props;
        return <section>{article.text}</section>;
    }

    toggleOpen = (event) => {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
}

// export default function Article(props) {
//     const {article} = props;
//     return (
//         <article>
//             <h2>{article.title}</h2>
//             <section>{article.text}</section>
//         </article>
//     );
// }
