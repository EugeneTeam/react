import React from 'react'
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
            createdAt,
            message,
            id,
            comments
        } = this.props;
        console.log(comments)
        return (
            <div>
                <div className='comment'>
                    <div className='avatar'>
                        <img src={avatarAuthor} alt='' className='avatar'/>
                    </div>
                    <div className='cont'>
                        <div className='name'>{nameAuthor}</div>
                        <div className='time'>
                            {/* {createdAt.split('T')[0]},{createdAt.split('T')[1].split('.')[0]} */}
                        </div>
                        <div>
                            {message}
                        </div>
                        <div className='reply'>
                            <label>
                                <a href='#main-form' onClick={this.handleClick(id, nameAuthor)}>
                                    Answer {nameAuthor}
                                </a>
                            </label>
                        </div>
                    </div>
                </div>
                {comments? (
                    <div className='child-comment'>
                        <CommentList
                            comments={comments}
                            index={index}
                            changeParentComment={this.props.changeParentComment}/>
                    </div>
                ) : null}
            </div>
        )
    }
}