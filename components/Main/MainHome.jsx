import React, { useState, useContext } from 'react';
import HomeThings from './MainHome/HomeThings.jsx';
import {
  makeStyles,
  Grid,
  Box,
  Typography
} from '@material-ui';

import { ProductsContext } from '/contexts/ProductsContext.jsx';

const MainHome = () => {
  
  const { setSearchQuery, setInputText } = useContext(ProductsContext);

  const useStyles = makeStyles(theme => ({
    thingsCtn: {
      margin: 0,
      maxWidth: '100%'
    }
  }))

  const classes = useStyles();

  const things = ['Accessories', 'Dress', 'Makeup', 'Pants', 'Shoes', 'Suits'];

  return (
    <Grid container component="section" id ="home">
      <Grid item xs={12}>
        <Box 
          display="flex" 
          flexDirection="column"
          alignItems="center" 
          justifyContent="center"
          height={'90vh'}
        >
          <Typography variant="h4">Welcome to Shopy!</Typography>
          <Typography>Like Products. Like Never Before.</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Typography variant="h6" paragraph align="center">Everything in one place</Typography>
          <Grid 
            className={classes.thingsCtn} 
            container 
            spacing={4}
            justify="center"
          >
            {things.map(thing => (
              <HomeThings 
                thing={thing} 
                setSearchQuery={setSearchQuery} 
                setInputText={setInputText}
              />
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default MainHome;