import React, {Component} from 'react'
import './Post.css'

class Post extends React.Component {
   constructor() {
      super();
      this.state = {
        data: null,
        name: null //category 
      };
    }
  
    componentWillMount() {
      let head = new Headers();
      let postId = this.props.index;
      console.log(postId)

      var myInit = { method: 'GET',
               headers: head,
               mode: 'cors'};

      fetch(`http://localhost:4000/article/${postId}`, myInit)
        .then(response => response.json())
        .then(data => {
            this.setState({ data })
            fetch(`http://localhost:4000/category/${this.state.data.category_id}`, myInit)
              .then(response => response.json())
              .then(name =>  this.setState({name}))
         });
    }

   render() {
      if(!this.state.data || !this.state.name) return (
         <div>
            <h1>Loading...</h1>
         </div>
      )
      return(
         <div>
            <img src={this.state.data.image_url} className='image'></img>
            <div className='type'>{this.state.name.name.toUpperCase()}</div>
            <div className='title'>{this.state.data.title}</div>
            <div className='text'>{this.state.data.text}</div>
         </div>
      )
   }
} 

export default Post;