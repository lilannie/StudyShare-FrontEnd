import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import Index from 'Index';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Index}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
