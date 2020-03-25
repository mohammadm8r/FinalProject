import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { borderRight } from '@material-ui/system';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
// import { createMuiTheme } from '@material-ui/core/styles'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles(theme => ({
  font: {
    fontFamily: 'Shabnam',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignIn() {
    const classes = useStyles();
    return (
      <StylesProvider jss={jss}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" className={classes.font}>
                ورود
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  disableTypography
                  // variant="outlined"
                  margin="normal"
                  // required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  style={{direction: 'rtl'}}
                  label={<Typography type="body2" style={{ fontFamily: 'Shabnam', textAlign: 'right'}}>آدرس ایمیل</Typography>}

                />
                <TextField
                disableTypography
                  // variant="outlined"
                  margin="normal"
                  // required
                  fullWidth
                  name="password"
                  label={<Typography type="body2" style={{ fontFamily: 'Shabnam', textAlign: 'right'}}>پسورد</Typography>}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  disableTypography
                  control={<Checkbox value="remember" color="primary" />}
                  label={<Typography type="body2" style={{ fontFamily: 'Shabnam', textAlign: 'right'}}>مرا به خاطرت نگه دار</Typography>}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit && classes.font}
                >
                  ورود
                </Button>
              </form>
            </div>
          </Container>      
      </StylesProvider>
    );
  }

export default SignIn;