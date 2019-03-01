import React, {Component} from 'react'

class Menu extends React.Component {
    render() {
        return(
            <div className="top">
                <div className="logo">MINIMĂØ</div>
                <div className="menu">
                    <ul>
                        <li><a href="/lifestyle">Lifestyle</a></li>
                        <li><a href="/photodiary">Photodiary</a></li>
                        <li><a href="/music">Music</a></li>
                        <li><a href="/travel">Travel</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;