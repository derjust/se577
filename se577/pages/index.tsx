import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Link from '../src/Link';
import ACard from './components/ACard'

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

          <ACard title="About me" description="Find in-depth information about me." href="/about" />

          <ACard title="Repositories" description="Find a list of all the repositories." href="/repos" />

        </Grid>
      </Container>
    </>
  );
};

export default Home;
