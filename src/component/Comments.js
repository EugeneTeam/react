import React from 'react'
import './Comment.css'
class Comments extends React.Component {
    constructor(){
        super();
        this.state = {
            data: null
        };
    }

    componentWillMount() {
        fetch(`http://localhost:4000/getcomments/${this.props.index}`, {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {this.setState({ data })
      });
    }

    render() {
        if(!this.state.data) return (
            <div>
               <h1>Loading...</h1>
            </div>
         )
         console.log(this.state.data);
         const posts = this.state.data.map((n) => {
            return <div className='comment'>
                        <div className='avatar'>
                            <img src={n.avatar_author} className='avatar'></img>
                        </div>
                        <div className='cont'>
                            <di className='name'>{n.name_author}</di>
                            <div className='time'>{n.createdAt.split('T')[0]},{n.createdAt.split('T')[1].split('.')[0]}</div>
                            <div>
                                {n.message}
                            </div>
                            <div className='reply'>
                                <a href=''>Answer {n.name_author}</a>
                            </div>
                        </div>
                    </div>
        });

        return(
            <div className='comment-main'>
                {posts}
            </div>
        )
    }
}

export default Comments;