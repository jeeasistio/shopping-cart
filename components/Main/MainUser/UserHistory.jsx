import React from 'react';
import {
  Typography,
  Box,
  IconButton,
  Icon,
  Paper
} from '@material-ui';

const UserHistory = ({ history, removeHistory }) => {
  return (
    <Box
      component={Paper}
      display="flex"
      flexDirection="column"
      alignItems="center"
      px={4}
      py={2}
    >
      <Typography>Purchase History</Typography>
      {history.map( ({name, quantity, totalPrice}, index) => (
        <Box
          width={"100%"}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography>
            <IconButton onClick={() => removeHistory(index)}><Icon>close</Icon></IconButton>
            {name}
          </Typography>
          <Typography>{quantity}</Typography>
          <Typography>${totalPrice.toFixed(2)}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default UserHistory;