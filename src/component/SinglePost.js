import React, { Component } from 'react'
import Menu from './Menu'
import './css/Post.css'
import './css/FirstPost.css'
import Comments from './Comments'
import Also from './Also'
import Share from './Share'
class SinglePost extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      name: null
    };
  }

  componentWillMount() {
    let postId = this.props.match.params.id;
    fetch(`http://localhost:4000/article/${postId}`, {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
        console.log(data)
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
        <Menu></Menu>
        <img src={this.state.data.imageUrl} className='fimage'></img>
        <div className='mar'>
          <div className='ftype'>{(this.state.data.category[0].name).toUpperCase()}</div>
          <div className='ftitle'>{this.state.data.title}</div>
          <div className='ftext'>{this.state.data.text}</div>
        </div>
        <Share />
        <Also index={this.props.match.params.id} />
        <Comments index={this.props.match.params.id} />
      </div>
    )
  }
}
export default SinglePost;