import React from 'react'
import CommentForm from './Comment/CommentForm'
import CommentList from './Comment/CommentList'
class Comments extends React.Component {
    constructor() {
        super();
        this.id = null;
        this.state = {
            parentComment: null
        }
    }
    componentWillMount() {
        this.id = this.props.index;
    }
    changeParentComment = (id) => {
        this.setState({
          parentComment: id
        });
      };
    render() {
        if(this.id == null) return (
            <div>
               <h1>Loading...</h1>
            </div>
         )
        return(
            <div>
                <CommentForm index={this.id} parent={!this.state.parentComment?-1:this.state.parentComment}/>
                <CommentList index={this.id} changeParentComment={this.changeParentComment}/>
            </div>
        )
    }
}

export default Comments;