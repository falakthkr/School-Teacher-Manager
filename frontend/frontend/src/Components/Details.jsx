import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StudentsTable from './Students';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1)
	}
}));

class Edit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			avatar: '',
			status: false,
			data: []
		};
	}

	componentDidMount() {
		axios.get('http://localhost:5000/teachers').then((res) => {
			this.setState({
				data: res.data
			});
		});
	}

	editDetails= (id) => {
		axios
			.post('http://localhost:5000/teachers/' + id, {
				name: this.state.name,
				email: this.state.email,
				avatar: this.state.avatar,
				subject : this.state.subject,
				gender : this.state.gender
			})
			.then((res) => console.log(res));
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleClick = (id) => {
		this.editDetails(id);
		this.setState({
			status: true
		});
	};

	render() {
		const { classes } = this.props;
		const { data } = this.state;
		const { handleChange } = this;
		const { id } = this.props.match.params;
		console.log(data);
		const { status } = this.state;
		if (status) {
			return <Redirect to="/" />;
		}
		return (
			<div justify="center">
				<h2>Faculty Info</h2>
				{data.map((item) => {
					if (id == item.id) {
						return (
							<div>
								<Grid justify="center">
									<Grid container spacing={3} justify="center">
										<Grid item xs={6}>
											<StudentsTable data={item.students} />
										</Grid>
										<Grid item xs={6}>
											<Grid container spacing={1} justify="center">
												<Grid item xs={12}>
													<Card className={classes.cardRoot} align="center">
														<CardContent align="center">
															<img
																alt="avatar"
																style={{
																	width: '100px',
																	height: '100px',
																	borderRadius: '60px'
																}}
																src={item.avatar}
															/>
															<Typography gutterBottom variant="h5" component="h2">
																Name : {item.first_name} {item.last_name}
															</Typography>
															<Typography>Email : {item.email}</Typography>
															<Typography>Subject: {item.subject}</Typography>
															<Typography>Gender : {item.gender}</Typography>
															<Typography>Age: {item.age}</Typography>
														</CardContent>
													</Card>
												</Grid>
												<Grid item xs={12}>
													<div className={classes.root}>
														<h3>Update Info:</h3>
														<div>
															<TextField
																label="First Name"
																style={{ marginLeft: '5px', marginRight: '5px' }}
																id="outlined-margin-dense"
																margin="dense"
																variant="outlined"
															/>
															<TextField
																label="Last Name"
																style={{ marginLeft: '5px', marginRight: '5px' }}
																id="outlined-margin-dense"
																margin="dense"
																variant="outlined"
															/>
															<br />
															<br />
															<TextField
																label="Email"
																style={{ marginLeft: '5px', marginRight: '5px' }}
																id="outlined-margin-dense"
																margin="dense"
																variant="outlined"
															/>
															<TextField
																label="Subject"
																style={{ marginLeft: '5px', marginRight: '5px' }}
																id="outlined-margin-dense"
																margin="dense"
																variant="outlined"
															/>
															<br />
															<br />
															<TextField
																label="Gender"
																style={{ marginLeft: '5px', marginRight: '5px' }}
																id="outlined-margin-dense"
																margin="dense"
																variant="outlined"
															/>
															<TextField
																label="Avatar"
																style={{ marginLeft: '5px', marginRight: '5px' }}
																id="outlined-margin-dense"
																margin="dense"
																variant="outlined"
															/>
															<br />
															<br />
															<Button
																style={{ margin: '5px' }}
																variant="contained"
																color="primary"
																className={classes.button}
																endIcon={<PublishIcon />}
																onClick={() => this.handleClick(item.id)}
															>
																Update
															</Button>
														</div>
													</div>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</div>
						);
					}
				})}
			</div>
		);
	}
}

export default withStyles(useStyles)(Edit);
