import React from 'react';
import ContactForm from './MainContact/ContactForm.jsx';
import ContactDetails from './MainContact/ContactDetails.jsx';
import {
  makeStyles,
  Grid,
  Typography,
  Paper
} from '@material-ui';

const MainContact = () => {
  
  const useStyles = makeStyles(theme => ({
    introStyle: {
      height: '70vh',
      display: "flex",
      textAlign: "center",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      padding: '0px 40px'
    },
    cardStyle: {
      padding: '15px 25px',
      margin: '10px 20px'
    }
  }))
  
  const classes = useStyles();
  
  return (
    <Grid container component="section" id="contact" justify="space-evenly">
      <Grid className={classes.introStyle} item>
        <Typography variant="h5">Get in Touch</Typography>
        <Typography vraiant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, alias aperiam molestias itaque magnam tenetur, ducimus laborum! Aut, cum, vel.
        </Typography>
      </Grid>
      <Grid 
        className={classes.cardStyle} 
        item
        component={Paper} 
        xs={12}
        md={5}
      >
        <ContactForm />
      </Grid>
      <Grid
        className={classes.cardStyle} 
        item
        component={Paper} 
        xs={12}
        md={5}
      >
        <ContactDetails />
      </Grid>
    </Grid>
  )
}

export default MainContact;