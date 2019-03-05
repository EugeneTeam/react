import React from 'react'

class Comments extends React.Component {
    constructor(){
        super();
        this.state = {
            data: null
        };
    }

    componentWillMount() {
        fetch(`http://localhost:4000/getcomments`, {
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
        //  const posts = this.state.data.map((n) => {
        //     return <div>
        //                 {/* {n.name_author} */}
        //             </div>
        // });

        return(
            <div>
                {/* {posts} */}
                Comments
            </div>
        )
    }
}

export default Comments;