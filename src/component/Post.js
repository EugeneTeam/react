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
            <img src={this.state.data.imageUrl} className='image'></img>
            <div className='type'>{this.state.data.category[0].name.toUpperCase()}</div>
            <a href={'article/' + this.state.data.id}><div className='title'>{this.state.data.title}</div></a>
            <div className='text'>{this.state.data.text}</div>
         </div>
      )
   }
}

export default Post;