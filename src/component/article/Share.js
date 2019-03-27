import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Main.css'
class Share extends React.Component {
    render() {
        return (
            <div>
                <div className='share'>
                    Share
                    <Link to='https://www.facebook.com'><div>FB</div></Link>
                    <Link to='https://www.twitter.com'><div>Tw</div></Link>
                    <Link to='https://plus.google.com/discover'><div>G+</div></Link>
                    <Link to='https://www.pinterest.com'><div>@</div></Link>
                </div>
            </div>
        )
    }
}
export default Share;