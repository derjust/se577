import * as React from 'react';
import { NextPage } from 'next'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ACard from '../src/components/ACard'

const Home: NextPage = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome!
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            This is a first, mocked version of the webapp.
            All text is static but gives an idea what will be where
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>

          <ACard title="About me and you" description="Find public information about derjust and you" href="/about" />

          <ACard title="Repositories" description="Find a list of all derjust's public repositories." href="/repos" />
          
          <ACard title="Gists" description="Show all YOUR gists - You must be signed in!" href="/gists" />

        </Grid>
      </Container>
    </>
  );
};

export default Home;
