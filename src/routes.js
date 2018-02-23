import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Shelf from './components/Shelf';
import Bin from './components/Bin';
import Home from './components/Home';

export default (
    <Switch>
            <Route exact path="/" component={Home}/>
            <Route path='/shelf/:id' component={Shelf}/>
            <Route path='/shelf/:id/:bin' component={Bin}/>
    </Switch>
)