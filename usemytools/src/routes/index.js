import React from 'react';
import {Router, Switch, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ToolsPage from '../pages/ToolsPage';
import ToolPage from '../pages/ToolPage';
import NewToolPage from '../pages/NewToolPage';
import EditToolPage from '../pages/EditToolPage';
import ProfilePage from '../pages/ProfilePage';
import EditUserPage from '../pages/EditUserPage';
import YourToolsPage from '../pages/YourToolsPage';
import RegistrationPage from '../pages/RegistrationPage';
import RouteAuthNeeded from '../hoc/RouteAuthNeeded';
import RouteAuthNotNeeded from '../hoc/RouteAuthNotNeeded';

import { logoutUser } from '../actions';

const Routes = (props) => {
    return (
        <>
        <Router history={props.history}>
            <div>
            {!props.authenticated &&
            <><Link to="/">HOME</Link><br/>
            <Link to="/login">LOGIN</Link><br/>
            <Link to="/register">REGISTER</Link>
            </>}
            {props.authenticated &&
            <><Link to="/tools">TOOLS_TO_RENT</Link><br/>
            <Link to="/profile">PROFILE</Link><br/>
            <Link to="/profile/tools">YOUR_TOOLS</Link><br/>
            <Link to="/profile/tools/new">NEW_TOOL</Link><br/>
            <button onClick={props.logoutUser}>LOGOUT</button></>}
            <Switch>
                <Route path="/" exact component={RouteAuthNotNeeded(HomePage)}/>
                <Route path="/login" exact component={RouteAuthNotNeeded(LoginPage)}/>
                <Route path="/register" exact component={RouteAuthNotNeeded(RegistrationPage)}/>
                <Route path="/tools" exact component={RouteAuthNeeded(ToolsPage)}/>
                <Route path="/profile/tools/new" exact component={RouteAuthNeeded(NewToolPage)}/>
                <Route path="/tools/:id" exact component={RouteAuthNeeded(ToolPage)}/>
                <Route path="/tools/:id/edit" exact component={RouteAuthNeeded(EditToolPage)}/>
                <Route path="/profile" exact component={RouteAuthNeeded(ProfilePage)}/>
                <Route path="/profile/edit" exact component={RouteAuthNeeded(EditUserPage)}/>
                <Route path="/profile/tools" exact component={RouteAuthNeeded(YourToolsPage)}/>
            </Switch>
            </div>
        </Router>
        </>
    );
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    }
}

const mapDispatchToProps = {
    logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);