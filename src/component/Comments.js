import React from 'react'
import CommentForm from './Comment/CommentForm'
import CommentList from './Comment/CommentList'
import './css/Comment.css'
class Comments extends React.Component {
    constructor() {
        super();
        this.state = {
            parentComment: null,
            parentName: null,
            data: null
        }
    }
    componentWillMount() {
        fetch(`http://localhost:4000/article/${this.props.index}`, {
            method: 'GET',
            headers: new Headers()
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ data })
            });
    }
    changeData = value => {
        this.setState({
            data: value
        })
    }
    changeParentComment = (id, name) => {
        this.setState({
            parentComment: id,
            parentName: name
        });
    };
    render() {
        if (!this.id && !this.state.data) return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
        return (
            <div>
                <div className='separator1'></div>
                {(this.state.data.Comments !== undefined) ? <CommentList
                    comments={this.state.data.Comments}
                    index={this.props.index}
                    changeParentComment={this.changeParentComment} /> : null}
                <CommentForm
                    index={this.props.index}
                    parent={this.state.parentComment}
                    name={this.state.parentName}
                    changeParentComment={this.changeParentComment}
                    changeData={this.changeData} />
            </div>
        )
    }
}
export default Comments;