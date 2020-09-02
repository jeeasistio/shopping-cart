import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Icon
} from '@material-ui';

const HeaderDrawer = ({ drawerIsOpen, setDrawerIsOpen }) => {
  
  const useStyles = makeStyles(theme => ({
    activeLink: {
      color: '#c0f'
    }
  }))
  
  const classes = useStyles();

  const links = [
    {
      icon: 'home',
      link: '/home',
      label: 'Home'
    },
    {
      icon: 'local_mall',
      link: '/shop',
      label: 'Shop'
    },
    {
      icon: 'shopping_cart',
      link: '/cart',
      label: 'Cart'
    },
    {
      icon: 'email',
      link: '/contact',
      label: 'Contact'
    },
    {
      icon: 'account_circle',
      link: '/user',
      label: 'User'
    }
  ];
  
  const location = useLocation();

  return (
    <Drawer anchor="right" open={drawerIsOpen} onClick={() => setDrawerIsOpen(false)} onClose={() => setDrawerIsOpen(false)}>
      <List>
        <ListItem button>
            <Icon>arrow_forward_ios</Icon>
        </ListItem>
        {links.map( ({icon, link, label}) => (
          <ListItem button component={Link} to={link} exact>
            <ListItemIcon>
              <Icon className={location.pathname === link && classes.activeLink}>{icon}</Icon>
            </ListItemIcon>
            <ListItemText className={location.pathname === link && classes.activeLink} primary={label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default HeaderDrawer;