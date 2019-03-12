import React, {Component} from 'react'
import Menu from './Menu'
import './Post.css'
import './FirstPost.css'
import Comments from './Comments'

class FirstPost extends React.Component {
    constructor() {
        super();
        this.state = {
          data: null,
          name: null
        };
      }
    
      componentWillMount() {
        let head = new Headers();
        let postId = this.props.match.params.id;
        let myInit = { method: 'GET',
                 headers: head,
                 mode: 'cors'};
  
        fetch(`http://localhost:4000/article/${postId}`, myInit)
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
        return(
            <div>
                <Menu></Menu>
                <img src={this.state.data.imageUrl} className='fimage'></img>
                <div className='mar'>
                  <div className='ftype'>{(this.state.data.category[0].name).toUpperCase()}</div>
                  <div className='ftitle'>{this.state.data.title}</div>
                  <div className='ftext'>{this.state.data.text}</div>
                </div>
                <div></div>
                <Comments index={this.props.match.params.id}/>
            </div>
        )
    }
}
export default FirstPost;