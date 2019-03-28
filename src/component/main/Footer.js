import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Main.css'
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-left">
                    Terms and conditions Privacy
                </div>
                <div className="footer-right">
                    <div className="follow">Follow</div>
                    <a href="https://www.instagram.com">
                        <div className="instagram" />
                    </a>
                    <a href="https://uk-ua.facebook.com">
                        <div className="facebook" />
                    </a>
                    <a href="https://twitter.com">
                        <div className="twitter" />
                    </a>
                </div>
            </div>
        )
    }
}
export default Footer;