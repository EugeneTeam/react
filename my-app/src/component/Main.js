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
                <Menu></Menu>
                <FirstPost></FirstPost>
                <div className='leavtext'>LEAVE A COMMENT</div>
                <div className='order'>

                    <div className='left'>
                        <Post index='1'></Post>
                        <div className='separator'></div>
                        <Post index='3'></Post>
                        <div className='separator'></div>
                    </div>

                    <div className='right'>
                        <Post index='2'></Post>
                        <div className='separator'></div>
                        <Post index='4'></Post>
                        <div className='separator'></div>
                    </div>
                </div>
                <SingUp></SingUp>
                <div className='order'>
                    <div className='left'>
                        <Post index='5'></Post>
                    </div>
                    <div className='right'>
                        <Post index='6'></Post>
                    </div>
                </div>
                <div className='separator'></div>
                <div class="footer">
                    <div class="footer-left">
                        Terms and conditions Privacy
                    </div>
                    
                    <div class="footer-right">
                        <div class="follow">Follow</div>
                        <a href=""><div class="instagram"></div></a>
                        <a href=""><div class="facebook"></div></a>
                        <a href=""><div class="twitter"></div></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;