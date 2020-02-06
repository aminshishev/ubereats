import {Switch, Route} from 'react-router-dom';
import React from 'react';
import {Main} from './Main';
import {Restaurant} from './restaurant/Restaurant';

const Content=()=>(
    <React.Fragment>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/restaurant' component={Restaurant} />
        </Switch>
    </React.Fragment>
)   
export {Content};