import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';


class PrivateRoutes extends React.Component {
	render() {
		const { isAuth } = this.props;
		if (isAuth) {
			console.log(isAuth);
			return (
				<div>
					
				</div>
			);
		} else {
			alert('Login');
			return <Redirect to="/" />;
		}
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.isAuth
});

export default connect(mapStateToProps, null)(PrivateRoutes);
