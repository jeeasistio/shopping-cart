import React from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Box,
  Button,
  Icon
} from '@material-ui';

const ToolbarLinks = () => {

  const useStyles = makeStyles(theme => ({
    linkStyle: {
      color: '#fff',
      margin: 'auto 5px'
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

  return (
    <Box>
      {links.map( ({icon, link, label}) => (
        <Button
          className={classes.linkStyle}
          component={Link}
          to={link}
          startIcon={<Icon>{icon}</Icon>}
        >
          {label}
        </Button>
      ))}
    </Box>
  )
}

export default ToolbarLinks;