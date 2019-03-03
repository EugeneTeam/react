import React, {Component} from 'react'
import './Post.css'

class Post2 extends React.Component {
   render() {
      return(
         <div>
            <img src={this.props.image} className='fimage'></img>
            <div className='box'>
                <div className='ftype'>{(this.props.name)}</div>
                <a href={'article/' + this.props.id}><div className='ftitle'>{this.props.title}</div></a>
                <div className='ftext'>{this.props.text}</div>
            </div>
         </div>
      )
   }
}

export default Post2;