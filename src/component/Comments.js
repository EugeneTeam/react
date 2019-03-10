import React from 'react'
import CommentForm from './Comment/CommentForm'
import CommentList from './Comment/CommentList'
class Comments extends React.Component {
    constructor() {
        super();
        this.id = null;
        this.state = {
            parentComment: null,
            parentName: null
        }
    }
    componentWillMount() {
        this.id = this.props.index;
    }
    changeParentComment = (id, name) => {
        this.setState({
          parentComment: id,
          parentName: name
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
                <CommentForm
                    index={this.id}
                    parent={this.state.parentComment}
                    name={this.state.parentName}/>
                <CommentList
                    index={this.id}
                    changeParentComment={this.changeParentComment}/>
            </div>
        )
    }
}

export default Comments;