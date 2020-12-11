import axios from 'axios';
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
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
			students: [],
			name: '',
			group: '',
			email: '',
			city: '',
			avatar: '',
			gender: '',
			limit: 5,
			page: 1
		};
	}

	componentDidMount = () => {
		axios
            .get(`http://localhost:5000/teachers`)
			.then((res) => {
				this.setState({
					students: res.data,
					loading: false
				});
			})
	};

	getData = () => {
		axios
			.get(`http://localhost:5000/teachers`)
			.then((res) => {
				this.setState({
					students: res.data,
					loading: false
				});
			});
	};

	getPage = (page) => {
		axios
			.get(`http://localhost:5000/teachers`)
			.then((res) => {
				this.setState({
					students: res.data,
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
			.post('http://localhost:5000/api/students', {
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
		const { deleteData, uploadData, handleChange } = this;
		const { students, name, email, gender, city, avatar, group } = this.state;
		const { classes } = this.props;
		function FormRow() {
			return (
				<React.Fragment>
					{students.map((item) => {
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
												startIcon={<EditIcon />}
												style={{ margin: '3px' }}
											/>
										</Link>
										<Button
											variant="contained"
											color="secondary"
											className={classes.button}
											startIcon={<DeleteIcon />}
											style={{ margin: '3px' }}
											onClick={() => deleteData(item._id)}
										/>
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
					<h1>Apache Student Crud</h1>
					<Container>
						<form className={classes.formRoot}>
							<TextField
								style={{ margin: '5px' }}
								onChange={handleChange}
								name="name"
								value={name}
								id="outlined-basic"
								label="Enter Student Name"
								variant="outlined"
							/>
							<TextField
								style={{ margin: '5px' }}
								onChange={handleChange}
								name="group"
								value={group}
								id="outlined-basic"
								label="Enter Blood Group"
								variant="outlined"
							/>
							<TextField
								style={{ margin: '5px' }}
								onChange={handleChange}
								name="email"
								value={email}
								id="outlined-basic"
								label="Enter Student Email"
								variant="outlined"
							/>
							<br />
							<TextField
								style={{ margin: '5px' }}
								onChange={handleChange}
								name="city"
								value={city}
								id="outlined-basic"
								label="Enter Student's City"
								variant="outlined"
							/>
							<TextField
								style={{ margin: '5px' }}
								onChange={handleChange}
								name="avatar"
								value={avatar}
								id="outlined-basic"
								label="Insert Avatar URL"
								variant="outlined"
							/>
							<TextField
								style={{ margin: '5px' }}
								onChange={handleChange}
								name="gender"
								value={gender}
								id="outlined-basic"
								label="Student's Gender"
								variant="outlined"
							/>
							<br />
							<Button
								style={{ margin: '5px' }}
								variant="contained"
								color="primary"
								className={classes.button}
								endIcon={<SendIcon />}
								onClick={() => uploadData()}
							>
								Send
							</Button>
						</form>
					</Container>
					<Grid container item xs={12} justify="center" spacing={3}>
						<FormRow />
					</Grid>
					<br />
					<Pagination onChange={(x, page) => this.getPage(page)} value={1} count={6} />
				</Grid>
			</div>
		);
	}
}

export default withStyles(useStyles)(Home);
