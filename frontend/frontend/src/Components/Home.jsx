import axios from 'axios';
import React from 'react';
import Button from '@material-ui/core/Button';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import DetailsTable from './Teachers';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import Checkbox from '@material-ui/core/Checkbox';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

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
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto'
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch'
			}
		}
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
			page: 1,
			search: '',
			checked: false
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	componentDidMount = () => {
		axios.get(`http://localhost:5000/teachers?_page=${this.state.page}&_limit=${this.state.limit}`).then((res) => {
			this.setState({
				teachers: res.data,
				loading: false
			});
		});
	};

	getSearch = () => {
		axios
			.get(
				`http://localhost:5000/teachers?_page=${this.state.page}&_limit=${this.state.limit}&first_name=${this
					.state.search}`
			)
			.then((res) => {
				this.setState({
					teachers: res.data,
					loading: false
				});
			});
	};

	handleCheck = () => {
		axios.get(`http://localhost:5000/teachers?_page=${this.state.page}&_limit=${this.state.limit}&_sort=age&_order=asc`).then((res) => {
			this.setState({
				teachers: res.data,
				loading: false
			});
		});
	};

	handleMale = () => {
		axios.get(`http://localhost:5000/teachers?_page=${this.state.page}&_limit=${this.state.limit}gender=Male`).then((res) => {
			this.setState({
				teachers: res.data,
				loading: false
			});
		});
	}

	handleFemale = () => {
		axios.get(`http://localhost:5000/teachers?_page=${this.state.page}&_limit=${this.state.limit}gender=Female`).then((res) => {
			this.setState({
				teachers: res.data,
				loading: false
			});
		});
	}

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
					<Grid item xs={3}>
						<FormGroup>
							<FormControlLabel
								control={<Switch onChange={this.handleCheck} />}
								label={this.state.checked ? 'Filter By Age' : 'Filter By Age'}
							/>
						</FormGroup>
					</Grid>
					<Grid item xs={3}>
						Female : <Checkbox onChange={this.handleFemale} />
					</Grid>
					<Grid item xs={3}>
						Male : <Checkbox onChange={this.handelMale} />
					</Grid>
					<Grid item xs={12}>
						<h1>Teacher-Student Manager</h1>
					</Grid>
					<Grid item xs={12} />
					<Grid item xs={12}>
						<div className={classes.search}>
							<InputBase
								placeholder="Search…"
								name="search"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
								inputProps={{ 'aria-label': 'search' }}
								value={this.state.search}
								onChange={this.handleChange}
							/>
							<Button color="default" startIcon={<SearchIcon />} onClick={() => this.getSearch()} />
						</div>
					</Grid>
					<Grid container spacing={1} justify="center">
						<DetailsTable data={teachers} />
					</Grid>
					<br />
					<br />
					<Grid container spacing={2} justify="center">
						<Pagination
							style={{ marginTop: '30px' }}
							onChange={(x, page) => this.getPage(page)}
							value={1}
							count={4}
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(useStyles)(Home);
