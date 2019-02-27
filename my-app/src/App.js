import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Post from './component/Post'
const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/article/:id" component={Post}/> 
                    {/* <Route path="/category/:id" component={Post}/>  */}
                </div>
            </BrowserRouter>
        )
    }
}

export default App;