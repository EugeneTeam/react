import React from 'react'
import './css/Main.css'
class Share extends React.Component {
    render() {
        return(
            <div>
                <div className='share'>
                    Share
                    <a href='https://www.facebook.com'><div>FB</div></a>
                    <a href='https://www.twitter.com'><div>Tw</div></a>
                    <a href='https://plus.google.com/discover'><div>G+</div></a>
                    <a href='https://www.pinterest.com'><div>@</div></a>
                </div>
            </div>
        )
    }
}

export default Share;