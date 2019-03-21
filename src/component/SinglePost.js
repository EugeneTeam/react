import React from 'react'
import Menu from './main/Menu'
import './css/Post.css'
import './css/FirstPost.css'
import Comments from './Comments'
import Also from './Also'
import Share from './Share'
class SinglePost extends React.Component {
  state = {
    data: null,
    name: null
  };
  
  componentWillMount() {
    let postId = this.props.match.params.id;
    fetch(`http://localhost:4000/article/${postId}`, {
      method: 'GET',
      headers: new Headers()
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
        <Menu/>
        <img src={this.state.data.imageUrl} alt='' className='fimage'/>
        <div className='mar'>
          <div className='ftype'>{this.state.data["Category.name"].toUpperCase()}</div>
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