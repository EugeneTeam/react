import React from 'react'
import { Link } from 'react-router-dom'
class Menu extends React.Component {
    render() {
        return (
            <div className="top">
                <div className="logo">MINIMĂØ</div>
                <div className="menu">
                    <ul>
                        <li><Link to="/category/1">Lifestyle</Link></li>
                        <li><Link to="/category/2">Photodiary</Link></li>
                        <li><Link to="/category/3">Music</Link></li>
                        <li><Link to="/category/4">Travel</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Menu;