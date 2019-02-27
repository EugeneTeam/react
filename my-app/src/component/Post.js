import React, {Component} from 'react'

class Post extends React.Component {
   constructor(props) {
      super(props);
  
      this.state = {
        data: null,
      };
    }
  
    componentWillMount() {
      let head = new Headers();
      let postId = this.props.match.params.id;

      var myInit = { method: 'GET',
               headers: head,
               mode: 'cors'};

      fetch(`http://localhost:4000/article/${postId}`, myInit)
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }

   render() {
      return(
         <div>
            {console.log(this.state.data)}
         </div>
      )
   }
} 

export default Post;