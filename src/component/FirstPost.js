import React, {Component} from 'react'
import './css/Post.css'
import './css/FirstPost.css'

class FirstPost extends React.Component {
    constructor() {
        super();
        this.state = {
          data: null
        };
      }
    
      componentWillMount() {
        fetch(`http://localhost:4000/article/1`, {
          method: 'GET',
          headers: new Headers(),
          mode: 'cors'
          })
          .then(response => response.json())
          .then(data => {this.setState({ data })});
      }
    render() {
        if(!this.state.data) return (
            <div>
               <h1>Loading...</h1>
            </div>
         )
        return(
            <div>
                <img src={this.state.data.imageUrl} className='fimage'></img>
                <div className='mar'>
                  <div className='ftype'>{this.state.data.category[0].name.toUpperCase()}</div>
                  <a href={'article/' + this.state.data.id}><div className='ftitle'>{this.state.data.title}</div></a>
                  <div className='ftext'>{this.state.data.text}</div>
                </div>
            </div>
        )
    }
}
export default FirstPost;