import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography, Grid, Button } from '@material-ui';

const HomeThings = ({ thing, setInputText, searchProducts, setSearchQuery }) => {

  const useStyles = makeStyles(theme => ({
    thingImg: {
      maxWidth: '100%'
    }
  }))
  
  const searchThing = () => {
    setInputText(thing)
    setSearchQuery(thing);
    searchProducts();
  }

  const classes = useStyles();

  return (
    <Grid item xs={10} sm={5} md={4}>
      <Button component={Link} to="/shop" onClick={searchThing}>
        <img className={classes.thingImg} src={`/assets/img/${thing.toLowerCase()}.jpg`} />
      </Button>
      <Typography align="center">{thing}</Typography>
    </Grid>
  )
}

export default HomeThings;