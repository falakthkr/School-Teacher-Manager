import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PublishIcon from '@material-ui/icons/Publish';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
			group: '',
			email: '',
			city: '',
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

	editCity = (id) => {
		axios
			.post('http://localhost:5000/api/student/update/' + id, {
				name: this.state.name,
				email: this.state.email,
				avatar: this.state.avatar,
				city: this.state.city,
				group: this.state.group
			})
			.then((res) => console.log(res));
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleClick = (id) => {
		this.editCity(id);
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
				{data.map((item) => {
					if (id == item.id) {
						return (
							<div>
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
										<Typography>City : {item.subject}</Typography>
										<Typography>Gender : {item.gender}</Typography>
										<Typography>Blood Group : {item.age}</Typography>
									</CardContent>
								</Card>
							</div>
						);
					}
				})}
			</div>
		);
	}
}

export default withStyles(useStyles)(Edit);
