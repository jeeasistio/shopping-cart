import React, { useContext } from 'react';
import he from 'he';
import {
  makeStyles,
  Chip
} from '@material-ui';
import { ProductsContext } from '/contexts/ProductsContext.jsx';

const ProductKeywords = ({ keywords }) => {
  
  const { setSearchQuery, setInputText, setCurrPage } = useContext(ProductsContext);

  const useStyles = makeStyles(theme => ({
    chipStyle: {
      fontSize: '0.6rem'
    }
  }))

  const classes = useStyles();
  
  const keywordClick = (keyword) => {
    setSearchQuery(keyword);
    setInputText(keyword),
    setCurrPage(1);
  }

  return (
    <React.Fragment>
      {keywords.split(',').slice(0,3).map(keyword => {
        return (
          <Chip
            className={classes.chipStyle}
            variant="outlined"
            size="small"
            onClick={() => keywordClick(keyword)}
            label={he.decode(keyword)}
          />
        )
      })}
    </React.Fragment>
  )
}

export default ProductKeywords;