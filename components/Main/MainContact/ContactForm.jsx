import React from 'react';
import {
  makeStyles,
  TextField,
  Button,
  Typography
} from '@material-ui';

const ContactForm = () => {
  
  const useStyles = makeStyles(theme => ({
    sendStyle: {
      marginTop: 5
    }
  }))
  
  const classes = useStyles();
  
  const sendMail = (e) => {
    e.preventDefault();
  }
  
  return (
    <form onSubmit={sendMail}>
      <Typography variant="h6" align="center">Email us</Typography>
      <TextField 
        label="Name"
        fullWidth
        margin="normal"
        variant="outlined"
        size="small"
      />
      <TextField 
        type="email"
        label="Email"
        fullWidth
        margin="normal"
        variant="outlined"
        size="small"
      />
      <TextField 
        multiline
        label="Message"
        fullWidth
        margin="normal"
        rows={8}
        variant="outlined"
        size="small"
      />
      <Button
        className={classes.sendStyle}
        variant="contained" 
        type="submit"
        fullWidth
      >
        Send Email
      </Button>
    </form>
  )
}

export default ContactForm;