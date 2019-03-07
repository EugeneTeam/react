import React from 'react'
import '../Comment.css'
import Comment from './Comment'
class CommentsList extends React.Component {
    constructor(){
        super();
        this.state = {
            data: null
        };
    }

    componentWillMount() {
        fetch(`http://localhost:4000/getcomments/${this.props.index}`, {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {this.setState({ data })
      });
    }

    render() {
        if(!this.state.data) return (
            <div>
               <h1>Loading...</h1>
            </div>
         )
         const posts = this.state.data.map((n) => {
            return <Comment 
                        index={this.props.index}
                        avatar_author = {n.avatar_author}
                        name_author = {n.name_author}
                        createdAt = {n.createdAt}
                        message = {n.message}
                        name_author = {n.name_author}
                        id={n.id}
                        changeParentComment={this.props.changeParentComment}
                    />
        });
        
        return(
            <div className='comment-main'>
                {posts}
            </div>
        )
    }
}

export default CommentsList;