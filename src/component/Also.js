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
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ data })
            });
    }
    render() {
        if (!this.state.data) return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
        return (
            <div className='also'>
                <div className='also-like'>YOU MAY ALSO LIKE</div>
                <div className='scolor'>
                    {this.state.data.length > 0 ?
                        <AlsoPost
                            img={this.state.data[0].imageUrl}
                            link={'/article/' + this.state.data[0].id}
                            title={this.state.data[0].title} /> :
                        <AlsoPost
                            img={'/image/sorry.png'}
                            link={'#'}
                            title={'This section has no articles yet.'} />}
                    {this.state.data.length > 1 ?
                        <AlsoPost
                            img={this.state.data[1].imageUrl}
                            link={'/article/' + this.state.data[1].id}
                            title={this.state.data[1].title} /> :
                        <AlsoPost
                            img={'/image/sorry.png'}
                            link={'#'}
                            title={'This section has no articles yet.'} />}
                    {this.state.data.length > 2 ?
                        <AlsoPost
                            img={this.state.data[2].imageUrl}
                            link={'/article/' + this.state.data[2].id}
                            title={this.state.data[2].title} /> :
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