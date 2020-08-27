import React from 'react';
import {
  makeStyles,
  Typography,
  Toolbar,
  IconButton,
  Icon
} from '@material-ui';

const HeaderToolbar = ({ toggleDrawer }) => {

  const useStyles = makeStyles(theme => ({
    navStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    menuStyle: {
      color: '#fff',
      display: 'flex',
      justifyContent: 'center'
    }
  }))

  const classes = useStyles();

  return (
    <Toolbar className={classes.navStyle} component="nav">
      <Typography>Shopy</Typography>
      <IconButton className={classes.menuStyle} onClick={toggleDrawer}><Icon>menu</Icon></IconButton>
    </Toolbar>
  )
}

export default HeaderToolbar;