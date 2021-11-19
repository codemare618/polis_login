import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./views/home";
import Login from "./views/login";
import Singup from "./views/signup";
import Activate from "./views/activate";
import ResetPass from "./views/resetPassword";
import ResetPassConfirm from "./views/resetPasswordConfirm";
import Layout from "./hocs/layout";

import {Provider} from "react-redux";
import store from "./store";

const App = () => (
    <Provider store={store}>
    <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Singup} />
                <Route exact path='/reset-password' component={ResetPass} />
                <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPassConfirm} />
                <Route exact path='/activate/:uid/:token' component={Activate} />
            </Switch>
        </Layout>
    </Router>
    </Provider>
);

export default App;
