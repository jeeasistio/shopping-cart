import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Icon
} from '@material-ui';

const HeaderDrawer = ({ drawerIsOpen, setDrawerIsOpen }) => {

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

  return (
    <Drawer anchor="right" open={drawerIsOpen} onClick={() => setDrawerIsOpen(false)} onClose={() => setDrawerIsOpen(false)}>
      <List>
        <ListItem button>
            <Icon>arrow_forward_ios</Icon>
        </ListItem>
        {links.map( ({icon, link, label}) => (
          <ListItem button component={Link} to={link} exact>
            <ListItemIcon>
              <Icon>{icon}}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default HeaderDrawer;