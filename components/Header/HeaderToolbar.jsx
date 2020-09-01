import React from 'react';
import ToolbarLinks from './HeaderToolbar/ToolbarLinks.jsx';
import {
  makeStyles,
  Typography,
  Toolbar,
  IconButton,
  Icon,
  Hidden
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
      display: 'flex',
      justifyContent: 'center'
    },
    logoStyle: {
      width: 100
    }
  }))

  const classes = useStyles();

  return (
    <Toolbar className={classes.navStyle} component="nav">
      <img className={classes.logoStyle} src="/assets/img/logo.png" />
      <Hidden mdUp>
        <IconButton className={classes.menuStyle} onClick={toggleDrawer}><Icon>menu</Icon></IconButton>
      </Hidden>
      <Hidden smDown>
        <ToolbarLinks />
      </Hidden>
    </Toolbar>
  )
}

export default HeaderToolbar;