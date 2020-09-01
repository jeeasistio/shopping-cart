import React from 'react';
import {
  Box,
  Icon,
  IconButton,
  Typography
} from '@material-ui';

const ContactDetails = () => {

  const details = [
    {
      icon: 'location_on',
      info: '312 P. Zamora St. Caloocan City, Philippines'
    },
    {
      icon: 'call',
      info: '555 - 555 - 5555'
    },
    {
      icon: 'email',
      info: 'jeeasistio08@gmail.com'
    }
  ]

  return (
    <React.Fragment>
      <Typography variant="h6" align="center">Talk to Us</Typography>
      {details.map( ({icon, info}) => (
        <Box
          display="flex"
          flexDirection={['column', 'row']}
          justifyContent="space-between"
          alignItems="center"
          mx={2}
          my={4}
          textAlign={['center', 'right']}
        >
          <Icon>{icon}</Icon>
          <Typography>{info}</Typography>
        </Box>
      ))}
      <hr />
      <Box
        textAlign="center"
      >
        {['facebook', 'codepen', 'twitter', 'github'].map(brand => (
          <IconButton 
            component="a"
            href={`https://${brand}.com/jeeasistio`}
            target="_blank"
          >
            <Icon fontSize="1rem" className={`fab fa-${brand}`} />
          </IconButton>
        ))}
      </Box>
    </React.Fragment>
  )
}

export default ContactDetails;