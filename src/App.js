import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './component/Main'
import SinglePost from './component/article/SinglePost';
import CategoryPost from './component/CategoryPost';
import NotFound from './component/NotFound'
import './component/css/Main.css'
class App extends React.Component {
    render() {
        return (
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/article/:id" component={SinglePost} />
                    <Route exact path="/category/:id" component={CategoryPost} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App;