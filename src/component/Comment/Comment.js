import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Comment.css'
import CommentList from "./CommentList";
export default class Comment extends React.Component {
    handleClick = (id, name) => () => {
        this.props.changeParentComment(id, name);
    };
    render() {
        const {
            index,
            avatarAuthor,
            nameAuthor,
            message,
            id,
            comments
        } = this.props;
        return (
            <div>
                <div className='comment'>
                    <div className='avatar'>
                        <img src={avatarAuthor} alt='' className='avatar' />
                    </div>
                    <div className='cont'>
                        <div className='name'>{nameAuthor}</div>
                        <div>
                            {message}
                        </div>
                        <div className='reply'>
                            <label>
                                <Link to='#main-form' onClick={this.handleClick(id, nameAuthor)}>
                                    Answer {nameAuthor}
                                </Link>
                            </label>
                        </div>
                    </div>
                </div>
                {comments ? (
                    <div className='child-comment'>
                        <CommentList
                            comments={comments}
                            index={index}
                            changeParentComment={this.props.changeParentComment} />
                    </div>
                ) : null}
            </div>
        )
    }
}