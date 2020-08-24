import React, { useState } from 'react';
import HeaderToolbar from './HeaderToolbar.jsx';
import HeaderDrawer from './HeaderDrawer.jsx';
import {
  AppBar,
  useScrollTrigger,
  Slide
} from '@material-ui';

const Header = () => {

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  
  const HideOnScroll = ({ children, window }) => {
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
      <Slide appear={false} direction="down" in={!trigger}>
          {children}
      </Slide>
    )
  }

  const toggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  }

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position="sticky" id="header">
          <HeaderToolbar toggleDrawer={toggleDrawer} />
        </AppBar>
      </HideOnScroll>
      <HeaderDrawer drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
    </React.Fragment>
  )
}

export default Header;