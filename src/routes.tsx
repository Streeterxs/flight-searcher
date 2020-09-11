import React from 'react';
import {Switch, Route} from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={() => <div>Landing Page!</div>}/>
    </Switch>
);

export default Routes;