import React from 'react'
import '../Comment.css'
import Comment from './Comment'
class CommentsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        };
        this.child = this.child.bind(this);
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



    child(value) {

        return true;
    }


    render() {
        if(!this.state.data) return (
            <div>
               <h1>Loading...</h1>
            </div>
         )
         const mar = {
             marginLeft: '50px'
         }
        let flag = false;
        let temp = null;
        const posts = this.state.data.map(n => {
            // 24 - 2 - null -  Dan   0
            // 25 - 2 - 24 -    Kyn   1
            // 26 - 2 - 25 -    Kyn   2
            // 27 - 2 - null -  Kyn   3
            // 28 - 2 - 26 -    Katya 4
            temp = null;
            
            for(let i = 0; i < this.state.data.length; i++) {
                if(flag) {
                    flag = !flag;
                    break;
                }
                
                if(n.id == this.state.data[i].parent_id) {
                    flag = !flag;
                    temp = <div>
                                <div style={mar}>
                                    <Comment
                                        index={this.props.index}
                                        avatar_author = {this.state.data[i].avatar_author}
                                        name_author = {this.state.data[i].name_author}
                                        createdAt = {this.state.data[i].createdAt}
                                        message = {this.state.data[i].message}
                                        name_author = {this.state.data[i].name_author}
                                        id={this.state.data[i].id}
                                        changeParentComment={this.props.changeParentComment}/>
                                </div>
                            </div>
                }
            }
            return <div>
                    <Comment
                        index={this.props.index}
                        avatar_author = {n.avatar_author}
                        name_author = {n.name_author}
                        createdAt = {n.createdAt}
                        message = {n.message}
                        name_author = {n.name_author}
                        id={n.id}
                        changeParentComment={this.props.changeParentComment}/>
                        {temp}
                    </div>
        });
        return(
            <div className='comment-main'>
                {posts}
            </div>
        )
    }
}

export default CommentsList;

// return  <div>
//                             <Comment
//                                 index={this.props.index}
//                                 avatar_author = {n.avatar_author}
//                                 name_author = {n.name_author}
//                                 createdAt = {n.createdAt}
//                                 message = {n.message}
//                                 name_author = {n.name_author}
//                                 id={n.id}
//                                 changeParentComment={this.props.changeParentComment}/>
//                         </div>