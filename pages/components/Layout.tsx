import React, { ReactElement, FC } from "react";
import Link from "../../src/Link";

import type { NextPage } from 'next';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode,
  title?: string,
}

const Layout = ({
  children,
  title = 'SE577-App',
}: LayoutProps) => (
      <>
        <Header title={title} />
        <main>{children}</main>
        <Footer />
      </>
    );


export default Layout;
