import React from 'react'

class AlsoPost extends React.Component {
    render() {
        return (
            <div className='also-post'>
                <img src={this.props.img}></img>
                <a href={'article/' + this.props.link}>
                    <div className='also-title'>
                        {this.props.title}
                    </div>
                </a>
            </div>
        )
    }
}

export default AlsoPost;