import React from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends React.Component {
    
    render() {
        return (
            <div className="top">
                <div className="logo">MINIMĂØ</div>
                <div className="menu">
                    <ul>
                        <li><NavLink to="/category/1">Lifestyle</NavLink></li>
                        <li><NavLink to="/category/2">Photodiary</NavLink></li>
                        <li><NavLink to="/category/3">Music</NavLink></li>
                        <li><NavLink to="/category/4">Travel</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;