import React from 'react'
import AlsoPost from './AlsoPost'
class Also extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        };
    }

    componentWillMount() {
        let postId = this.props.index;
        fetch(`http://localhost:4000/category/${postId}`, {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors'
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
        if (!this.state.data) return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
        return (
            <div className='also'>
                <div className='also-like'>YOU MAY ALSO LIKE</div>
                <div className='scolor'>
                    {this.state.data.Articles.length > 0 &&
                        this.state.data.Articles[0].id !== this.props.index ?
                        <AlsoPost
                            img={this.state.data.Articles[0].imageUrl}
                            link={'/article/' + this.state.data.Articles[0].id}
                            title={this.state.data.Articles[0].title} /> :
                        <AlsoPost
                            img={'/image/sorry.png'}
                            link={'#'}
                            title={'This section has no articles yet.'} />}
                    {this.state.data.Articles.length > 1 && this.state.data.Articles[1].id !== this.props.index ?
                        <AlsoPost
                            img={this.state.data.Articles[1].imageUrl}
                            link={'/article/' + this.state.data.Articles[1].id}
                            title={this.state.data.Articles[1].title} /> :
                        <AlsoPost
                            img={'/image/sorry.png'}
                            link={'#'}
                            title={'This section has no articles yet.'} />}
                    {this.state.data.Articles.length > 2 && this.state.data.Articles[2].id !== this.props.index ?
                        <AlsoPost
                            img={this.state.data.Articles[2].imageUrl}
                            link={'/article/' + this.state.data.Articles[2].id}
                            title={this.state.data.Articles[2].title} /> :
                        <AlsoPost
                            img={'/image/sorry.png'}
                            link={'#'}
                            title={'This section has no articles yet.'} />}
                </div>
            </div>
        )
    }
}

export default Also;