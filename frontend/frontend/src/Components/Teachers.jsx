import React from 'react';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export default function DetailsTable(props) {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell style={{ color: 'red' }}>
							<b>ID</b>
						</TableCell>
						<TableCell style={{ color: 'red' }} />
						<TableCell style={{ color: 'red' }}>
							<b>Faculty Name</b>
						</TableCell>
						<TableCell style={{ color: 'red' }}>
							<b>Subject</b>
						</TableCell>
						<TableCell style={{ color: 'red' }}>
							<b>Students</b>
						</TableCell>
						<TableCell />
						{/* <TableCell>Gender</TableCell>
						<TableCell>Age</TableCell> */}
					</TableRow>
				</TableHead>
				<TableBody>
					{props.data.map((item) => (
						<TableRow>
							<TableCell>{item.id}</TableCell>
							<TableCell>
								<Avatar src={item.avatar} />
							</TableCell>
							<TableCell>
								{item.first_name} {item.last_name}
							</TableCell>
							<TableCell>{item.subject}</TableCell>
							<TableCell>{item.age}</TableCell>
							<TableCell>
								<Link style={{ textDecoration: 'none' }} to={`/${item.id}`}>
									<Button
										color="default"
										startIcon={<ArrowRightAltIcon/>}
									/>
								</Link>
							</TableCell>
							{/* <TableCell>{item.gender}</TableCell>
							<TableCell>{item.age}</TableCell> */}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
