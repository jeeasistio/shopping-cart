import React from 'react';
import {
  TextField,
  Button,
  Typography
} from '@material-ui';

const ContactForm = () => {
  
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
      />
      <TextField 
        type="email"
        label="Email"
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField 
        multiline
        label="Message"
        fullWidth
        margin="normal"
        rows={8}
        variant="outlined"
      />
      <Button variant="contained" type="submit" fullWidth>Send Email</Button>
    </form>
  )
}

export default ContactForm;