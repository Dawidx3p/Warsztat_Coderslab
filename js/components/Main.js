import React, {useState} from "react";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Details from "../containers/Details";

import ToWatch from "../containers/ToWatch";
import Watched from "../containers/Watched";

import store from '../redux/store';
import Search from "./Search";

export default function Main(){
    return(
        <Provider store={store}>
            <Router>
            <Switch>
                <Route exact path='/' component={Search} />
                <Route exact path='/watched' component={Watched}/>
                <Route exact path='/to_watch' component={ToWatch}/>
                <Route path='/:imdbID' component={Details} />
            </Switch>
            </Router>
        </Provider>
    )
}