import React from 'react'
import './Main.css'
class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <div className="footer-left">
                    Terms and conditions Privacy
                </div>
                    <div className="footer-right">
                    <div className="follow">Follow</div>
                    <a href=""><div className="instagram"></div></a>
                    <a href=""><div className="facebook"></div></a>
                    <a href=""><div className="twitter"></div></a>
                </div>
            </div>
        )
    }
}

export default Footer;