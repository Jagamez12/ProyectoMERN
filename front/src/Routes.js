import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './core/Home'
import Pets from './core/Pets'
import Search from './core/Search'
import Signin from './core/Signin'
import Signup from './core/Signup'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/pets/:petsId" exact component={Pets}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/Search" exact component={Search}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes