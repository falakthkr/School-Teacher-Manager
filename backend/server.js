const express = require('express');
const Student = require('./models/Student');
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

app.get('/api/students', (req, res) => {
	Student.find().then((students) => res.json(students)).catch((err) => res.status(400).json('Error: ' + err));
});

app.post('/api/students', (req, res) => {
	const { id, name, group, email, city, avatar, gender } = req.body;
	const newStudent = new Student({ id, name, group, email, city, avatar, gender });

	newStudent
		.save()
		.then(() => res.json('Student Added Successfully'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

app.delete('/api/student/:id', (req, res) => {
	Student.findByIdAndDelete(req.params.id)
		.then(() => res.json('Student Deleted Successfully'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

app.post('/api/student/update/:id', (req, res) => {
	Student.findById(req.params.id)
		.then((student) => {
			student.name = req.body.name;
			student.group = req.body.group;
			student.email = req.body.email;
			student.city = req.body.city;
			student.avatar = req.body.avatar;

			student
				.save()
				.then(() => res.json('Student updated Successfully'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`The server is up and running ${port}`);
});
