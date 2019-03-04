import React, {Component} from 'react'
import Menu from './Menu'
import Post2 from './Post2';
import './Main.css'
class CategoryPost extends React.Component {
    constructor(){
        super()
        this.state = {
            name: null
          };
    }
    componentWillMount() {
        let head = new Headers();
        let postId = this.props.match.params.id;
        let myInit = { method: 'GET',
                 headers: head,
                 mode: 'cors'};
        fetch(`http://localhost:4000/category/${postId}`, myInit)
            .then(response => response.json())
            .then(name =>  this.setState({name}))
    }
    render() {
        if(!this.state.name) return (
            <div>
               <h1>Loading...</h1>
            </div>
         )

        const posts = this.state.name.map((n) => {
            return <div>
                        <Post2  image={n.image_url}
                            name={n.Category.name}
                            id={n.id}
                            text={n.text}
                            title={n.title} />
                            <div className='separ'></div>
                    </div>
        });

        return(
            <div>
                <Menu />
                <div className='center'>
                    {posts}
                </div>
            </div>
        )
    }
}

export default CategoryPost;