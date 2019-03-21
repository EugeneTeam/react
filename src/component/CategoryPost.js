import React from 'react'
import Menu from './main/Menu'
import Post2 from './Post2';
import './css/Main.css'
import Footer from './main/Footer'
import uniqid from 'uniqid'
class CategoryPost extends React.Component {
    state = {
        data: null
    };
    haveError = false;

    componentWillMount() {
        fetch(`http://localhost:4000/category/${this.props.match.params.id}`, {
            method: 'GET',
            headers: new Headers()
        }).then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error(response.statusText)
            }
        }).then(response => { response.json() })
            .then(data => { this.setState({ data }) })
            .catch(e => { console.log(e) })

    }
    render() {
        if (this.haveError) return (
            <div>
                Server Error
            </div>
        )
        // if (this.state.data != null) return (
        //     <div>
        //         <h1>Loading...</h1>
        //     </div>
        // )
        // const posts = this.state.data.Articles.map((n) => {
        //     return (
        //         <div key={uniqid()}>
        //             <Post2
        //                 key={n.id}
        //                 image={n.imageUrl}
        //                 name={this.state.data.name}
        //                 id={n.id}
        //                 text={n.text}
        //                 title={n.title} />
        //             <div className='separ'></div>
        //         </div>
        //     )
        // });
        // return (
        //     <div>
        //         <Menu location={this.props.location} />
        //         <div className='center'>
        //             {posts}
        //         </div>
        //         <Footer />
        //     </div>
        // )
    }
}

export default CategoryPost;