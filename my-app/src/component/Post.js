import React, {Component} from 'react'
import './Post.css'

class Post extends React.Component {
   constructor() {
      super();
      this.state = {
        data: null,
      };
    }
  
    componentWillMount() {
      let head = new Headers();
      let postId = this.props.match.params.id;

      var myInit = { method: 'GET',
               headers: head,
               mode: 'cors'};

      fetch(`http://localhost:4000/article/${postId}`, myInit)
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }

   render() {
      if(!this.state.data) return (
         <div>
            <h1>Loading...</h1>
         </div>
      )
      const TodoComponent = {
         width: "300px",
         height: "300px",
         background: "url(../../../../public" + this.state.data.image_url + ")",
       }
      return(
         <div>
            <div style={TodoComponent}></div>
            <span className='title'>{this.state.data.title}</span>
            <br></br>
            <div className='text'>{this.state.data.text}</div>
         </div>
      )
   }
} 

export default Post;