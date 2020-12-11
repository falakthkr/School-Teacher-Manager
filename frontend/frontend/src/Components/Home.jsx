import axios from 'axios';
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import { v4 as uuid } from 'uuid';

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
			age:"",
			limit: 5,
			page: 1
		};
	}

	componentDidMount = () => {
		axios
            .get(`http://localhost:5000/teachers?_page=${this.state.page}&_limit=${this.state.limit}`)
			.then((res) => {
				this.setState({
					teachers: res.data,
					loading: false
				});
			})
	};

	getData = () => {
		axios
			.get(`http://localhost:5000/teachers?_page=${this.state.page}&_limit=${this.state.limit}`)
			.then((res) => {
				this.setState({
					teachers: res.data,
					loading: false
				});
			});
	};

	getPage = (page) => {
		axios
			.get(`http://localhost:5000/teachers?_page=${page}&_limit=${this.state.limit}`)
			.then((res) => {
				this.setState({
					teachers: res.data,
					loading: false
				});
			});
	};

	deleteData = (id) => {
		axios
			.delete('http://localhost:5000/api/student/' + id)
			.then((res) => console.log(res))
			.then((res) => this.getData());
	};

	uploadData = () => {
		axios
			.post('http://localhost:5000/api/teachers', {
				name: this.state.name,
				group: this.state.group,
				email: this.state.email,
				id: uuid(),
				city: this.state.city,
				avatar: this.state.avatar,
				gender: this.state.gender
			})
			.then((res) => this.getData(res));
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	// handlePage = (currentPage) => {
	// 	console.log(currentPage)
	// 	// this.setState({
	// 	// 	page : currentPage
	// 	// })
	// 	()
	// };

	render() {
		console.log(this.state);
		const { teachers} = this.state;
		const { classes } = this.props;
		function FormRow() {
			return (
				<React.Fragment>
					{teachers.map((item) => {
						return (
							<Grid item xs={4}>
								<Card className={classes.cardRoot} align="center">
									<CardContent align="center">
										<img
											alt="avatar"
											style={{ width: '100px', height: '100px', borderRadius: '60px' }}
											src={item.avatar}
										/>
										<Typography gutterBottom variant="h5" component="h2">
											Name : {item.first_name}{" "}{item.last_name}
										</Typography>
										<Typography>Email : {item.email}</Typography>
										<Typography>Gender : {item.gender}</Typography>
										<Typography>Age : {item.age}</Typography>
										<Link style={{ textDecoration: 'none' }} to={`/${item.id}`}>
											<Button
												variant="contained"
												color="default"
												className={classes.button}
												startIcon={<ArrowForwardIosIcon/>}
												style={{ margin: '3px' }}
											/>
										</Link>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</React.Fragment>
			);
		}
		return (
			<div className={classes.root}>
				<Grid container spacing={1} justify="center">
					<h1>Teacher-Student Manager</h1>
					<Grid container item xs={12} justify="center" spacing={3}>
						<FormRow />
					</Grid>
					<br />
					<Pagination onChange={(x, page) => this.getPage(page)} value={1} count={4} />
				</Grid>
			</div>
		);
	}
}

export default withStyles(useStyles)(Home);
