const express = require('express');
const Teacher = require('./models/Teacher');
const Student = require("./models/Student")
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(
	process.env.ATLAS_URI,
	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
	() => {
		console.log('The database is connected');
	}
);

app.get('/teachers', (req, res) => {
	Teacher.find().then((students) => res.json(students)).catch((err) => res.status(400).json('Error: ' + err));
});

app.post('/teachers', (req, res) => {
	const { id,avatar,first_name,last_name,email,gender,age,students } = req.body;
	const newTeacher = new Teacher({ id,avatar,first_name,last_name,email,gender,age,students });

	newTeacher
		.save()
		.then(() => res.json('Teacher Added Successfully'))
		.catch((err) => res.status(400).json('Error: ' + err));
});
app.post('/teachers/student', (req, res) => {
	const { id,avatar,name,subject } = req.body;
	const newStudent = new Student({ id,avatar,name,subject });

	newStudent
		.save()
		.then(() => res.json('Student Added Successfully'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

app.delete('/api/teacher/:id', (req, res) => {
	Teacher.findByIdAndDelete(req.params.id)
		.then(() => res.json('Teacher Deleted Successfully'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

app.post('/api/teacher/update/:id', (req, res) => {
	Teacher.findById(req.params.id)
		.then((teacher) => {
			teacher.name = req.body.name;
			teacher.group = req.body.group;
			teacher.email = req.body.email;
			teacher.city = req.body.city;
			teacher.avatar = req.body.avatar;

			teacher
				.save()
				.then(() => res.json('Teacher updated Successfully'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`The server is up and running ${port}`);
});
