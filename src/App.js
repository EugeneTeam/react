import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Main from './component/Main'
import SinglePost from './component/SinglePost';
import CategoryPost from './component/CategoryPost';
import AddArticle from './component/AddArticle'
import NotFound from './component/NotFound'
const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                <Route exact={true} path="/" component={Main}> 

                    <Route path="/article/:id" component={SinglePost}/> 
                    <Route path="/category/:id" component={CategoryPost}/> 
                    <Route path="/addarticle" component={AddArticle}/> 

                    
                    <Redirect from='*' to='/404' exact={true} />
                    <Route path='/404' component={NotFound} />
                </Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;