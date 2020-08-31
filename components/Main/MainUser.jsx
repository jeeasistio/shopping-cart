import React, { useContext } from 'react';
import HistoryItem from './MainUser/HistoryItem.jsx';
import {
  makeStyles,
  Grid,
  Box,
  Avatar,
  Icon,
  IconButton,
  Typography,
  Paper,
  Divider
} from '@material-ui';

import { UserContext } from '/contexts/UserContext.jsx';

const MainUser = () => {

  const { balance, history, removeHistory } = useContext(UserContext);

  const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: '100%',
      margin: 0,
      padding: '15px 0px'
    },
    avatarStyle: {
      fontSize: '3.5rem',
      width: 180,
      height: 180
    },
    balanceLabel: {
      fontWeight: 500
    }
  }))

  const classes = useStyles();

  const userDetails = {
    userName: 'JeeAsistio',
    userId: 805521,
    userEmail: 'jeeasistio08@gmail.com'
  }

  const { userName, userId, userEmail } = userDetails;

  return (
    <Grid 
      className={classes.root}
      container 
      justify="center" 
      spacing={3}
    >
      <Grid item xs={12} sm={6}>
        <Box display="flex" justifyContent="center">
          <Avatar className={classes.avatarStyle} src={<Icon>account_user</Icon>} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box 
          display="flex" 
          flexDirection="column" 
          justifyContent="space-evenly"
          height={[180, "100%"]}
        >
          <Box>
            <Typography variant="subtitle2">Name:</Typography>
            <Typography>{userName}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">ID:</Typography>
            <Typography>{userId}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">Email:</Typography>
            <Typography>{userEmail}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.balanceLabel}>Balance:</Typography> 
        <Typography variant="h5">${balance.toFixed(2)}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          component={Paper}
          display="flex"
          flexDirection="column"
          alignItems="center"
          px={[1, 4]}
          py={2}
        > 
          <Typography paragraph>Purchase History</Typography>
          <Divider component={Box} alignSelf="stretch" />
          {history.map( ({name, quantity, unitPrice, totalPrice, date}, index) => (
            <HistoryItem 
              removeHistory={removeHistory}
              name={name}
              quantity={quantity}
              unitPrice={unitPrice}
              totalPrice={totalPrice}
              date={date}
              index={index}
            />
          ))}
          {!history.length && 
            <Box my={2} textAlign="center">
              <Typography color="textSecondary">No Purchases</Typography>
            </Box>
          }
        </Box>
      </Grid>
    </Grid>
  )
}

export default MainUser;