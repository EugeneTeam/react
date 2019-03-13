import React,{Component} from 'react'
import './Main.css'
import FirstPost from './FirstPost'
import './FirstPost.css'
import Post from './Post'
import Menu from './Menu'
import SingUp from './SignUp'
import Footer from './Footer'
class Main extends React.Component {

    render() {
        return(
            <div className='wrapper'>
                <Menu />
                <div className='content'></div>
                <Footer/>
            </div>
        )
    }
}

export default Main;