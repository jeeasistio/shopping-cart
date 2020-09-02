import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography, Grid, Button, Paper } from '@material-ui';

const HomeThings = ({ thing, setInputText, setSearchQuery }) => {

  const useStyles = makeStyles(theme => ({
    thingImg: {
      maxWidth: '100%'
    },
    imgBtn: {
      padding: 0,
      overflow: 'hidden'
    },
    thingName: {
      fontWeight: 500
    }
  }))
  
  const searchThing = () => {
    setInputText(thing)
    setSearchQuery(thing);
  }

  const classes = useStyles();

  return (
    <Grid item xs={10} sm={5} md={4}>
      <Paper>
        <Button className={classes.imgBtn} component={Link} to="/shop" onClick={searchThing}>
          <img className={classes.thingImg} src={`/assets/img/${thing.toLowerCase()}.jpg`} />
        </Button>
      </Paper>
      <Typography className={classes.thingName} align="center">{thing}</Typography>
    </Grid>
  )
}

export default HomeThings;