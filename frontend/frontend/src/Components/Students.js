import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

export default function StudentsTable(props) {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="center" style={{ color: 'red' }}>
							<b>Student Roll ID</b>
						</TableCell>
						<TableCell align="center"  style={{ color: 'red' }}>
                        </TableCell>
						<TableCell align="center"  style={{ color: 'red' }}>
							<b>Student Name</b>
						</TableCell>
						<TableCell align="center"  style={{ color: 'red' }}>
							<b>Class</b>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.data.map((item) => (
						<TableRow>
							<TableCell align="center">{item.id}</TableCell>
							<TableCell align="center" >
								<Avatar src={item.avatar} />
							</TableCell>
							<TableCell align="center" >
								{item.name}
							</TableCell>
							<TableCell align="center" >
								{item.class}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
