import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from '../pages/NotFound';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


function Router() {
	return (
		<div>
			<Header></Header>
			<Switch>
				<Route path="/" component={Home} exact={true}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route component={NotFound}></Route>
			</Switch>
		</div>
	);
}

export default Router;
