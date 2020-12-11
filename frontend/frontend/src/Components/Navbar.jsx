import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography,IconButton} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

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
					<IconButton edge="start" color="inherit">
						<Link style={{color:"white"}} to="/home"><HomeIcon /></Link>
					</IconButton>
				</Toolbar>														
			</AppBar>
		</div>
	);
}
