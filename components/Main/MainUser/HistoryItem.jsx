import React, { useState } from 'react';
import {
  makeStyles,
  Typography,
  Box,
  Button,
  IconButton,
  Icon,
  Paper,
  Collapse
} from '@material-ui';

const HistoryItem = ({ removeHistory, name, quantity, unitPrice, totalPrice, date, index }) => {
  
  const useStyles = makeStyles(theme => ({
    collapseStyle: {
      background: '#f4f4f4',
      width: '100%'
    }
  }))
  
  const classes = useStyles();
  
  const [detailsIsOpen, setDetailsIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Box
        width={"100%"}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box width={"80%"} display="flex" alignItems="center" py={1}>
          <IconButton size="small" onClick={() => removeHistory(index)}>
            <Icon>close</Icon>
          </IconButton>
          <Button size="small" onClick={() => setDetailsIsOpen(!detailsIsOpen)}>
            <Typography variant="button" noWrap>{name}</Typography>
          </Button>
        </Box>
        <Typography>${totalPrice.toFixed(2)}</Typography>
      </Box>
      <Box
        className={classes.collapseStyle}
        component={Collapse}
        in={detailsIsOpen} 
        timeout="auto"
        unmountOnExit
        alignSelf="flex-start"
        display="flex"
        flexDirection={['column', 'column', 'row']}
      >
        <Box m={1}>
          <Typography variant="subtitle2"> Product Name:</Typography>
          <Typography>{name}</Typography>
        </Box>
        <Box m={1}>
          <Typography variant="subtitle2">Purchase Date:</Typography>
          <Typography>{date}</Typography>
        </Box>
        <Box m={1}>
          <Typography variant="subtitle2">Quantity:</Typography>
          <Typography>{quantity}</Typography>
        </Box>
        <Box m={1}>
          <Typography variant="subtitle2">Price per Unit:</Typography>
          <Typography>${unitPrice.toFixed(2)}</Typography>
        </Box>
      </Box> 
    </React.Fragment>
  )
}

export default HistoryItem;