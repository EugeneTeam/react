import React from 'react'
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
                    <a href="https://www.instagram.com"><div className="instagram"></div></a>
                    <a href="https://uk-ua.facebook.com"><div className="facebook"></div></a>
                    <a href="https://twitter.com"><div className="twitter"></div></a>
                </div>
            </div>
        )
    }
}

export default Footer;