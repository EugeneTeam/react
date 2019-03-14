import React, { Component } from 'react'
import Menu from './Menu'
import Post2 from './Post2';
import './css/Main.css'
import Footer from './Footer'
class CategoryPost extends React.Component {
    constructor() {
        super()
        this.state = {
            data: null
        };
    }
    componentWillMount() {
        fetch(`http://localhost:4000/category/${this.props.match.params.id}`,
            {
                method: 'GET',
                headers: new Headers(),
                mode: 'cors'
            }).then(response => response.json())
            .then(data => this.setState({ data }))
    }
    render() {
        if (!this.state.data) return (
            <div>
                <h1>Loading...</h1>
            </div>
        )

        const posts = this.state.data.map((n) => {
            return (
                <div>
                    <Post2
                        key={n.id}
                        image={n.imageUrl}
                        name={n.Category.name}
                        id={n.id}
                        text={n.text}
                        title={n.title} />
                    <div className='separ'></div>
                </div>
            )
        });
        return (
            <div>
                <Menu />
                <div className='center'>
                    {posts}
                </div>
                <Footer />
            </div>
        )
    }
}

export default CategoryPost;