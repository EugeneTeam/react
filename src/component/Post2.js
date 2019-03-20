import React from 'react'
import './css/Post.css'

class Post2 extends React.Component {
   render() {
      return(
         <div>
            <img src={this.props.image} alt='' className='image'></img>
            <div>
               <div className='type'>{this.props.name.toUpperCase()}</div>
               <a href={'/article/' + this.props.id}><div className='title'>{this.props.title}</div></a>
               <div className='text'>{this.props.text}</div>
            </div>
         </div>
      )
   }
}

export default Post2;