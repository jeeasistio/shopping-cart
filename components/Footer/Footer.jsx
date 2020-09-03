import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Box, Typography, Button } from '@material-ui';

const Footer = () => {
  
  const useStyles = makeStyles(theme => ({
    PAT: {
      textTransform: 'none',
      fontWeight: 'inherit'
    }
  }))
  
  const classes = useStyles();
  
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      py={1}
      mt={2}
      borderTop={0.5}
      borderColor="#aaa"
    >
      <Typography variant="body2">&copy; {new Date().getFullYear()}</Typography>
      <Button className={classes.PAT} component={Link} to="/privacy and terms">Privacy & Terms</Button>
    </Box>
  )
}

export default Footer;