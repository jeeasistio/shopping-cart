import React, { useContext } from 'react';
import he from 'he';
import {
  makeStyles,
  Button,
  Typography
} from '@material-ui';
import { ProductsContext } from '/contexts/ProductsContext.jsx';

const ProductKeywords = ({ keywords }) => {
  
  const { setSearchQuery } = useContext(ProductsContext);

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
            onClick={() => setSearchQuery(keyword)}
          >
            {he.decode(keyword)}
          </Button>
        )
      })}
    </React.Fragment>
  )
}

export default ProductKeywords;