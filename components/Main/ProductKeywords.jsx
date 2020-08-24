import React from 'react';
import he from 'he';
import {
  makeStyles,
  Button,
  Typography
} from '@material-ui';

const ProductKeywords = ({ keywords }) => {
  
  const useStyles = makeStyles(theme => ({
    keywordStyle: {
      borderRadius: 30
    },
    keywordLabel: {
      fontSize: 8
    }
  }))
  
  const classes = useStyles();
  
  return (
    <React.Fragment>
      {keywords.split(',').slice(0,3).map(keyword => {
        return (
          <Button 
            className={classes.keywordStyle} 
            classes={{label: classes.keywordLabel}} 
            size="small"
            variant="outlined"
          >
            {he.decode(keyword)}
          </Button>
        )
      })}
    </React.Fragment>
  )
}

export default ProductKeywords;