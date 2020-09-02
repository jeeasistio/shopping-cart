import React, { useState } from 'react';
import {
  makeStyles,
  TextField,
  Button,
  Typography,
  Box
} from '@material-ui';

const ContactForm = () => {

  const useStyles = makeStyles(theme => ({
    sendStyle: {
      background: 'linear-gradient(#c0f, #c0f)',
      color: '#fff',
      marginTop: 5
    }
  }))

  const classes = useStyles();
  
  const [emailSent, setEmailSent] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();
    setEmailSent(true);
  }

  return (
    <React.Fragment>
      {!emailSent ?
        <form onSubmit={sendMail}>
          <Typography variant="h6" align="center">Email us</Typography>
          <TextField 
            label="Name"
            fullWidth
            margin="normal"
            variant="outlined"
            size="small"
            required
          />
          <TextField 
            type="email"
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            size="small"
            required
          />
          <TextField 
            multiline
            label="Message"
            fullWidth
            margin="normal"
            rows={8}
            variant="outlined"
            size="small"
            required
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
      : <Box
          display="flex"
          justifyContent="center"
          textAlign="center"
          flexDirection="column"
        >
          <Typography paragraph variant="h6">Email Sent!</Typography>
          <Typography>Thank you for reaching us out! We are now looking forward to your message.</Typography>
        </Box>
      }
    </React.Fragment>
  )
}

export default ContactForm;