import React, {Component} from 'react'
import './Post.css'
import './FirstPost.css'

class FirstPost extends React.Component {
    constructor() {
        super();
        this.state = {
          data: null
        };
      }
    
      componentWillMount() {
        let head = new Headers();
  
        let myInit = { method: 'GET',
                 headers: head,
                 mode: 'cors'};
  
        fetch(`http://localhost:4000/article/1`, myInit)
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
                <img src={this.state.data[0].image_url} className='fimage'></img>
                <div className='mar'>
                  <div className='ftype'>{this.state.data[0].Category.name.toUpperCase()}</div>
                  <a href={'article/' + this.state.data[0].id}><div className='ftitle'>{this.state.data[0].title}</div></a>
                  <div className='ftext'>{this.state.data[0].text}</div>
                </div>
            </div>
        )
    }
}
export default FirstPost;