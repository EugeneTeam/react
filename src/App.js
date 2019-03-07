import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Post from './component/Post'
import Main from './component/Main'
import SinglePost from './component/SinglePost';
import CategoryPost from './component/CategoryPost';
import AddArticle from './component/AddArticle'
const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/article/:id" component={SinglePost}/> 
                    <Route path="/category/:id" component={CategoryPost}/> 
                    <Route path="/addarticle" component={AddArticle}/> 
                    <Route exact path="/" component={Main}/> 
                </div>
            </BrowserRouter>
        )
    }
}

export default App;