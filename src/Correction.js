import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Photo from '@material-ui/icons/Photo';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { mainListItems } from './listItems';
import Absense from './Absense';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import ScheduleIcon from '@material-ui/icons/Schedule';


const drawerWidth = 240;

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  font: {
    fontFamily: 'Shabnam',
  },
  mainList: {
    fontFamily: 'Shabnam',
    marginTop: '4rem',
  },
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    fontFamily: 'Shabnam',
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  depositContext: {
    flex: 1,
  },
  size: {
    width:'25%',
    height: 'auto',
  },
}));

export default function Correction() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              اصلاح وضعیت حضور و غیاب
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
      >
        <Divider />
        <List className={classes.mainList}>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid style={{alignContent: 'center'}} item xs={3} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                  <Typography color="textSecondary" className={classes.depositContext}>
                    <Photo style={{width: '50%', height: 'auto'}} />
                  </Typography>
                  <div>
                    <Link color="primary" href="#" onClick={preventDefault} className = {classes.font} >
                      مشاهده عکس این جلسه
                    </Link>
                  </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={4}>
              <Paper className={classes.paper}>
                <div className={classes.font} style={{marginBottom:'5%'}}>
                    تاریخ: ...
                </div>
                <div className={classes.font} style={{marginBottom:'5%'}}>
                    وضعیت حضور: حاضر
                </div>
                <div className={classes.font} style={{marginBottom:'32%'}}>
                    توضیحات: ...
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}