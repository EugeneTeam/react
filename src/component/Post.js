import React, {Component} from 'react'
import './Post.css'

class Post extends React.Component {
   constructor() {
      super();
      this.state = {
        data: null
      };
    }
  
    componentWillMount() {
       
      let head = new Headers();
      let postId = this.props.index;

      var myInit = { method: 'GET',
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
            <img src={this.state.data[0].image_url} className='image'></img>
            <div className='type'>{this.state.data[0].Category.name.toUpperCase()}</div>
            <a href={'article/' + this.state.data[0].id}><div className='title'>{this.state.data[0].title}</div></a>
            <div className='text'>{this.state.data[0].text}</div>
         </div>
      )
   }
} 

export default Post;