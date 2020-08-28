import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import ResturentLanding from '../Restaurent'
import NotFoundPage from '../404'
import './style.scss';

const App = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact component={ResturentLanding} />
                <Route component={NotFoundPage} />
            </Switch>
        </Fragment>
    );
}

export default App;
