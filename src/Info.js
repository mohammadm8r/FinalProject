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
function createData(id, num_of_absense, num_of_classes, name_of_class, code_of_class) {
  return { id, num_of_absense, num_of_classes, name_of_class, code_of_class};
}

const rows = [
  createData(0, '2', '10', 'مبانی برنامه نویسی', '3102110'),
  createData(1, '3', '5', 'اندیشه ۱', '1200110'),
  createData(2, '2', '10', 'فیزیک ۲', '1203212'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
    font: {
        fontFamily: 'Shabnam',
      },
}));

export default function Info() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title style={{ textAlign: 'center' }}>کلاس‌های ترم جاری</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.font} style={{ textAlign: 'center' }}>تعداد غیبت</TableCell>
            <TableCell className={classes.font} style={{ textAlign: 'center' }}>تعداد جلسات برگزار شده</TableCell>
            <TableCell className={classes.font} style={{ textAlign: 'center' }}>نام کلاس</TableCell>
            <TableCell className={classes.font} style={{ textAlign: 'center' }}>کد درس</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.num_of_absense}</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.num_of_classes}</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}><Link style={{cursor:'pointer'}}>{row.name_of_class}</Link></TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.code_of_class}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}