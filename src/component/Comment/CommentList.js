import React from 'react'
import '../css/Comment.css'
import Comment from './Comment'
class CommentsList extends React.Component {
    render() {
        const {comments, index} = this.props;
        const mar = {
            marginLeft: '50px'
        };
        return(<div style={mar}>
                {comments.map(comment => (
                    <Comment
                        key={comment.id}
                        index={index}
                        avatarAuthor={comment.avatarAuthor}
                        nameAuthor={comment.nameAuthor}
                        createdAt={comment.createdAt}
                        message={comment.message}
                        id={comment.id}
                        comments={comment.Comment}
                        parent = {comment.parentId}
                        changeParentComment={this.props.changeParentComment}
                    />
                ))}
            </div>
        )
    }
}

export default CommentsList;