import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Login from '../Components/Login';
import Home from '../Components/Home';
import Edit from '../Components/Details';
import Navbar from '../Components/Navbar';

const PublicRoutes = () => {
	return (
		<div>
			<Navbar />
			<Route path="/" exact render={() => <Login />} />
			<Switch>
				<Route exact path="/home" render={() => <Home />} />
				<Route exact path="/:id" render={(props) => <Edit {...props} />} />
			</Switch>{' '}
		</div>
	);
};

export default PublicRoutes;
