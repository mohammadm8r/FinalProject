import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, status, eslah) {
  return { id, date, status, eslah};
}

const rows = [
  createData(0, '۲۴/۱۲/۹۵', 'حاضر', 'اصلاح'),
  createData(1, '۲۸/۱۲/۹۵', 'غایب', 'اصلاح'),
  createData(2, '۱۵/۱/۹۶', 'حاضر', 'اصلاح'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
    font: {
        fontFamily: 'Shabnam',
      },
}));

export default function Absense() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title style={{ textAlign: 'center' }}>وضعیت حضور و غیاب</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.font} style={{ textAlign: 'center' }}>تاریخ</TableCell>
            <TableCell className={classes.font} style={{ textAlign: 'center' }}>وضعیت حضور و غیاب</TableCell>
            <TableCell className={classes.font} style={{ textAlign: 'center' }}>اصلاح وضعیت</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.date}</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.status}</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}><Link style={{cursor:'pointer'}}>{row.eslah}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}