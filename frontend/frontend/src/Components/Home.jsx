import axios from 'axios';
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import Navbar from "./Navbar"
import DetailsTable from "./Teachers"


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	cardRoot: {
		maxWidth: 345
	},
	media: {
		height: 140
	},
	button: {
		margin: theme.spacing(1)
	},
	paginationRoot: {
		'& > * + *': {
			marginTop: theme.spacing(2)
		}
	},
	formRoot: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch'
		}
	},
	TextField: {
		margin: 5
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			teachers: [],
			name: '',
			email: '',
			avatar: '',
			gender: '',
			age: '',
			limit: 5,
			page: 1
		};
	}

	componentDidMount = () => {
		axios.get(`http://localhost:5000/teachers?_page=${this.state.page}&_limit=${this.state.limit}`).then((res) => {
			this.setState({
				teachers: res.data,
				loading: false
			});
		});
	};

	getData = () => {
		axios.get(`http://localhost:5000/teachers?_page=${this.state.page}&_limit=${this.state.limit}`).then((res) => {
			this.setState({
				teachers: res.data,
				loading: false
			});
		});
	};

	getPage = (page) => {
		axios.get(`http://localhost:5000/teachers?_page=${page}&_limit=${this.state.limit}`).then((res) => {
			this.setState({
				teachers: res.data,
				loading: false
			});
		});
	};

	render() {
		console.log(this.state);
		const { teachers } = this.state;
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container spacing={1} justify="center">
					<h1>Teacher-Student Manager</h1>
					<Grid container spacing={1} justify="center">
						<DetailsTable data={teachers}/>
					</Grid>
					<br />
					<br />
					<Grid container spacing={2} justify="center">
						<Pagination style={{marginTop:"30px"}} onChange={(x, page) => this.getPage(page)} value={1} count={4} />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(useStyles)(Home);

