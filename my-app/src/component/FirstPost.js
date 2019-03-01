import React, {Component} from 'react'
import './Post.css'
import './FirstPost.css'

class FirstPost extends React.Component {
    constructor() {
        super();
        this.state = {
          data: null,
          name: null
        };
      }
    
      componentWillMount() {
        let head = new Headers();
  
        var myInit = { method: 'GET',
                 headers: head,
                 mode: 'cors'};
  
        fetch(`http://localhost:4000/article/1`, myInit)
          .then(response => response.json())
          .then(data => {
              this.setState({ data })
              fetch(`http://localhost:4000/category/${this.state.data.category_id}`, myInit)
              .then(response => response.json())
              .then(name =>  this.setState({name}))
        });
      }
    render() {
        if(!this.state.data || !this.state.name) return (
            <div>
               <h1>Loading...</h1>
            </div>
         )
        return(
            <div>
                <img src={this.state.data.image_url} className='fimage'></img>
                <div className='mar'>
                  <div className='ftype'>{this.state.name.name.toUpperCase()}</div>
                  <div className='ftitle'>{this.state.data.title}</div>
                  <div className='ftext'>{this.state.data.text}</div>
                </div>
            </div>
        )
    }
}
export default FirstPost;