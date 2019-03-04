import React,{Component} from 'react'
import './Main.css'
import FirstPost from './FirstPost'
import './FirstPost.css'
import Post from './Post'
import Menu from './Menu'
import SingUp from './SignUp'
class Main extends React.Component {

    render() {
        return(
            <div>
                <Menu />
                <FirstPost />
                <div className='leavetext'>LEAVE A COMMENT</div>
                <div className='order'>

                    <div className='left'>
                        <Post index='1' />
                        <div className='separator'></div>
                        <Post index='3' />
                        <div className='separator'></div>
                    </div>

                    <div className='right'>
                        <Post index='2' />>
                        <div className='separator'></div>
                        <Post index='4' />
                        <div className='separator'></div>
                    </div>
                </div>
                <SingUp />
                <div className='order'>
                    <div className='left'>
                        <Post index='5' />
                    </div>
                    <div className='right'>
                        <Post index='6' />
                    </div>
                </div>
                <div className='separator'></div>
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
            </div>
        )
    }
}

export default Main;