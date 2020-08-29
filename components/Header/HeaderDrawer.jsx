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

  return (
    <Drawer anchor="right" open={drawerIsOpen} onClick={() => setDrawerIsOpen(false)} onClose={() => setDrawerIsOpen(false)}>
      <List>
        <ListItem button>
            <Icon>arrow_forward_ios</Icon>
        </ListItem>
        <ListItem button component={Link} to="/home" exact>
          <ListItemIcon>
            <Icon>home</Icon>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/shop" exact>
          <ListItemIcon>
            <Icon>local_mall</Icon>
          </ListItemIcon>
          <ListItemText primary="Shop" />
        </ListItem>
        <ListItem button component={Link} to="/cart" exact>
          <ListItemIcon>
            <Icon>shopping_cart</Icon>
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItem>
        <ListItem button component={Link} to="/contact" exact>
          <ListItemIcon>
            <Icon>email</Icon>
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/user" exact>
          <ListItemIcon>
            <Icon>account_circle</Icon>
          </ListItemIcon>
            <ListItemText primary="User" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default HeaderDrawer;