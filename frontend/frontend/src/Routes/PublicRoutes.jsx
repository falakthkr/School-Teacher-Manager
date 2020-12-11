import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Login from '../Components/Login';
import Home from '../Components/Home';
import Edit from '../Components/Details';

const PublicRoutes = () => {
	return (
		<div>
			<Route path="/" exact render={() => <Login />} />
			<Switch>
				<Route exact path="/home" render={() => <Home />} />
				<Route exact path="/:id" render={(props) => <Edit {...props} />} />
			</Switch>{' '}
		</div>
	);
};

export default PublicRoutes;
