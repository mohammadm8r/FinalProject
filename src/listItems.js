import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import Typography from '@material-ui/core/typography'
import { makeStyles } from '@material-ui/core/styles';
import { directive } from '@babel/types';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard.js'




export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText
                disableTypography
                primary={<Typography type="body2" style={{ fontFamily: 'Shabnam', textAlign: 'right'}}><Link to = '/' style = {{ textDecoration: 'none' }}>داشبورد</Link></Typography>}
            />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <SchoolIcon />
            </ListItemIcon>
        <ListItemText
            disableTypography
            primary={<Typography type="body2" style={{ fontFamily: 'Shabnam', textAlign: 'right'}}>کلاس‌های من</Typography>} />
        </ListItem>
        <ListItem button>
        <ListItemIcon>
            <PeopleIcon />
        </ListItemIcon>
        <ListItemText 
            disableTypography
            primary={<Typography type="body2" style={{ fontFamily: 'Shabnam', textAlign: 'right'}}>اصلاح وضعیت</Typography>}
        />
        </ListItem>
    </div>
);