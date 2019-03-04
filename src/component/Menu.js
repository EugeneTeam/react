import React, {Component} from 'react'

class Menu extends React.Component {
    render() {
        return(
            <div className="top">
                <div className="logo">MINIMĂØ</div>
                <div className="menu">
                    <ul>
                        <li><a href="/category/1">Lifestyle</a></li>
                        <li><a href="/category/2">Photodiary</a></li>
                        <li><a href="/category/3">Music</a></li>
                        <li><a href="/category/4">Travel</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;