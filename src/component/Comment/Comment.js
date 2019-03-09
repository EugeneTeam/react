import React, {Component} from 'react'
import '../Comment.css'

class Post2 extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        //console.log(this.props.changeParentComment());
    }
    handleClick = (id, name) => () => {
        this.props.changeParentComment(id, name);
      };
   render() {
    
      return(
            <div className='comment'>
                <div className='avatar'>
                    <img src={this.props.avatar_author} className='avatar'></img>
                </div>
                <div className='cont'>
                    <div className='name'>{this.props.name_author}</div>
                    <div className='time'>{this.props.createdAt.split('T')[0]},{this.props.createdAt.split('T')[1].split('.')[0]}</div>
                    <div>
                        {this.props.message}
                    </div>
                    <div className='reply'>
                        <label>
                            <a href='#main-form' onClick={this.handleClick(this.props.id, this.props.name_author)}>Answer {this.props.name_author}</a>
                        </label>
                    </div>
                </div>
            </div>
      )
   }
}

export default Post2;