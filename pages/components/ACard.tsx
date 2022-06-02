import React, { ReactElement } from "react";
import Link from "../../src/Link";

import type { NextPage } from 'next';

import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

type ACardProps = {
    title: string,
    description: string,
    href: string,
}

const ACard = ({
  title,
  description,
  href
}: ACardProps) : ReactElement => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            { title }
          </Typography>
          <Typography>
            { description }
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={href} passHref>
            <Button size="small">View</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>

  );
};

export default ACard;
