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
      : <Box
          display="flex"
          justifyContent="center"
          textAlign="center"
          flexDirection="column"
        >
          <Typography paragraph variant="h6">Email Sent!</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, alias aperiam molestias itaque magnam tenetur</Typography>
        </Box>
      }
    </React.Fragment>
  )
}

export default ContactForm;