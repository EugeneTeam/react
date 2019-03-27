import React from 'react'
import Menu from './main/Menu'
import Post2 from './Post2'
import Footer from './main/Footer'
import './css/Main.css'
class CategoryPost extends React.Component {
    state = {
        data: null,
        haveError: false
    };
    componentWillReceiveProps(props) {
        this.getData(props);
    }
    componentWillMount() {
        this.getData(this.props);
    }
    getData(props) {
        fetch(`http://localhost:4000/category/${props.match.params.id}`, {
            method: 'GET',
            headers: new Headers()
        }).then(response => {
            if (!response.ok) {
                this.setState({ haveError: true })
                throw Error(response.statusText)
            } else {
                return response.json()
            }
        }).then(data => {
            this.setState({ data })
        }).catch(e => {
            console.log(e);
        })
    }
    render() {
        if (this.state.haveError) return (
            <div>
                <h1>Server Have Error</h1>
            </div>
        )
        if (this.state.data === null) return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
        const posts = this.state.data.Articles.map((n) => {
            return (
                <div key={n.id}>
                    <Post2
                        key={n.id}
                        image={n.imageUrl}
                        name={this.state.data.name}
                        id={n.id}
                        text={n.text}
                        title={n.title} />
                    <div className='separ' />
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