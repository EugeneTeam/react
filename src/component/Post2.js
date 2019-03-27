import React from 'react'
import { Link } from 'react-router-dom'
import './css/Post.css'
class Post2 extends React.Component {
   render() {
      return (
         <div>
            <img src={this.props.image} alt='' className='image'></img>
            <div>
               <div className='type'>{this.props.name.toUpperCase()}</div>
               <Link to={'/article/' + this.props.id}><div className='title'>{this.props.title}</div></Link>
               <div className='text'>{this.props.text}</div>
            </div>
         </div>
      )
   }
}
export default Post2;