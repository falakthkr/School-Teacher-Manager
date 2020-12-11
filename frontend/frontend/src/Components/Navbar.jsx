import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	link: {
		color: 'white',
		marginLeft: '5%',
		textDecoration: 'none',
		fontSize: '24px'
	}
}));

export default function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
				</Toolbar>
			</AppBar>
		</div>
	);
}
