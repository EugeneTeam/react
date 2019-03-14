import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Main from './component/Main'
import SinglePost from './component/SinglePost';
import CategoryPost from './component/CategoryPost';
import NotFound from './component/NotFound'
import './component/css/Main.css'

const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/article/:id" component={SinglePost}/>
                        <Route exact path="/category/:id" component={CategoryPost}/>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;