import React from 'react'

class AlsoPost extends React.Component {
    render() {
        return (
            <div className='also-post'>
                <img src={this.props.img} alt=''></img>
                <a href={this.props.link}>
                    <div className='also-title'>
                        {this.props.title}
                    </div>
                </a>
            </div>
        )
    }
}

export default AlsoPost;