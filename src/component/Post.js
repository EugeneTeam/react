import React from 'react'
import { Link } from 'react-router-dom'
import './css/Post.css'
class Post extends React.Component {
   state = {
      data: null
   };
   componentWillMount() {
      fetch(`http://localhost:4000/article/${this.props.index}`, {
         method: 'GET',
         headers: new Headers(),
         mode: 'cors'
      })
         .then(response => response.json())
         .then(data => {
            this.setState({ data })
         });
   }
   render() {
      if (!this.state.data) return (
         <div>
            <h1>Loading...</h1>
         </div>
      )
      return (
         <div>
            <img src={this.state.data.imageUrl} alt='' className='image' />
            <div className='type'>{this.state.data.category[0].name.toUpperCase()}</div>
            <Link to={'article/' + this.state.data.id}><div className='title'>{this.state.data.title}</div></Link>
            <div className='text'>{this.state.data.text}</div>
         </div>
      )
   }
}
export default Post;