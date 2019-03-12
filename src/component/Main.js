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
            <div>
                <Menu />
                <FirstPost />
                <div className='leavetext'>LEAVE A COMMENT</div>
                <div className='order'>

                    <div className='left'>
                        <Post index='2' />
                        <div className='separator'></div>
                        <Post index='4' />
                        <div className='separator'></div>
                    </div>

                    <div className='right'>
                        <Post index='3' />
                        <div className='separator'></div>
                        <Post index='5' />
                        <div className='separator'></div>
                    </div>
                </div>
                <SingUp />
                <div className='order'>
                    <div className='left'>
                        <Post index='6' />
                    </div>
                    <div className='right'>
                        <Post index='7' />
                    </div>
                </div>
                <div className='separator'></div>
                <div className="footer">
                    <div className="footer-left">
                        Terms and conditions Privacy
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Main;