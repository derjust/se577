import type { NextPage } from 'next'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import RepositoryList from './components/RepoList'

const Repositories: NextPage = () => {
  return (<>
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
          Repositories
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          All the repositories:
        </Typography>
      </Container>
    </Box>
    <Container sx={{ py: 8 }} maxWidth="md">

      <RepositoryList />

    </Container>
    </>
  )
}

export default Repositories
