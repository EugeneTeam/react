import React, {Component} from 'react'
import Menu from './Menu'
import './Post.css'
import './FirstPost.css'
import Comments from './Comments'

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
        let postId = this.props.match.params.id;
        let myInit = { method: 'GET',
                 headers: head,
                 mode: 'cors'};
  
        fetch(`http://localhost:4000/article/${postId}`, myInit)
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
                <Menu></Menu>
                <img src={this.state.data[0].image_url} className='fimage'></img>
                <div className='mar'>
                  <div className='ftype'>{this.state.data[0].Category.name.toUpperCase()}</div>
                  <div className='ftitle'>{this.state.data[0].title}</div>
                  <div className='ftext'>{this.state.data[0].text}</div>
                </div>
                <div id='main-form'></div>
                <Comments index={this.props.match.params.id}/>
            </div>
        )
    }
}
export default FirstPost;