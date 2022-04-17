import React, { ReactElement } from "react";
import Link from "../../src/Link";

import type { NextPage } from 'next';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

type HeaderProps = {
    title: string,
}

const Header = ({ title } : HeaderProps ): ReactElement => {
    return (
      <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
  <Toolbar variant="dense">
  <Link color="inherit" href="/" passHref>
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="menu"
    sx={{ mr: 2 }}
  >
      <MenuIcon />
    </IconButton>

  </Link>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      {title}
    </Typography>
      <Link color="inherit" href="/login" passHref>
        <Button color="inherit">Login</Button>
      </Link>
  </Toolbar>
</AppBar>
</Box>
    );
};

export default Header;
