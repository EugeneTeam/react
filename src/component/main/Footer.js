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
                    <Link to="https://www.instagram.com">
                        <div className="instagram" />
                    </Link>
                    <Link to="https://uk-ua.facebook.com">
                        <div className="facebook" />
                    </Link>
                    <Link to="https://twitter.com">
                        <div className="twitter" />
                    </Link>
                </div>
            </div>
        )
    }
}
export default Footer;