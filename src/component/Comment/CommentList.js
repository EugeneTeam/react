import React from 'react'
import '../Comment.css'
import Comment from './Comment'
class CommentsList extends React.Component {
    constructor(){
        super();
        // this.state = {
        //     data: null
        // };
    }

    // componentWillMount() {
    //     fetch(`http://localhost:4000/article/${this.props.index}`, {
    //         method: 'GET',
    //         headers: new Headers(),
    //         mode: 'cors'
    //     })
    //     .then(response => response.json())
    //     .then(data => {this.setState({ data })
    //   });
    // }
    render() {
        if(!this.state.data) return (
            <div>
               <h1>Loading...</h1>
            </div>
         )
        const {comments, index} = this.props;
        // const comments = this.state.data[0].Comments

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
                        comments={comment}
                        changeParentComment={this.props.changeParentComment}
                    />
                ))}
            </div>
        )
    }
}

export default CommentsList;