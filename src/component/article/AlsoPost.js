import React from 'react'
import { Link } from 'react-router-dom'
class AlsoPost extends React.Component {
    render() {
        return (
            <div className='also-post'>
                <img src={this.props.img} alt=''></img>
                <Link to={this.props.link}>
                    <div className='also-title'>
                        {this.props.title}
                    </div>
                </Link>
            </div>
        )
    }
}
export default AlsoPost;