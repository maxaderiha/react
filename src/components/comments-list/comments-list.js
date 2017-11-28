import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/comment';
import Loader from '../loader/loader';
import {loadArticleComments} from '../../action-creators/index';
import toggleOpen from '../../decorators/toggle-open';
import {connect} from 'react-redux';


class CommentsList extends Component {
    static propTypes = {
        //from toggleOpen
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired,
    };

    componentWillReceiveProps({article, loadArticleComments, isOpen}) {
        const {commentsLoading, commentsLoaded, id} = article;
        if (isOpen && !commentsLoading && !commentsLoaded) {
            loadArticleComments(id);
        }
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const text = isOpen ? 'hide comments' : 'show comments';
        return (
            <section>
                <button className="btn" onClick={toggleOpen}>{text}</button>
                {getBody(article, isOpen)}
            </section>
        );
    }

}

function getBody(article, isOpen) {
    const {commentsLoading, commentsLoaded, comments} = article;

    if (!isOpen) return null;
    if (commentsLoading) return <Loader/>;
    if (!commentsLoaded) return null;

    if (!comments.length) return <p>No comments ...</p>;

    return (
        <ul>
            {comments.map(id => <li key={id}><Comment id={id}/></li>)}
        </ul>
    );
}

export default connect(null, {loadArticleComments})(toggleOpen(CommentsList));