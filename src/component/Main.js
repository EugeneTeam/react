import React from 'react'
import './css/Main.css'
import './css/FirstPost.css'
import Menu from './main/Menu'
import Footer from './main/Footer'
class Main extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <Menu />
                <div className='content' />
                <Footer />
            </div>
        )
    }
}
export default Main;