import React from 'react'
import './css/Main.css'
class Share extends React.Component {
    render() {
        return(
            <div>
                <div className='share'>
                    Share
                    <a href=''><div>FB</div></a>
                    <a href=''><div>Tw</div></a>
                    <a href=''><div>G+</div></a>
                    <a href=''><div>t</div></a>
                    <a href=''><div>@</div></a>
                </div>
            </div>
        )
    }
}

export default Share;