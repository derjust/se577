import type { NextPage } from 'next'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import ACard from '../src/components/ACard'

import useSWR from 'swr'
import fetch from '../src/fetch'


interface RepositorySummary {
  id: string,
  name: string,
  teaser: string,
}

interface RepositoriesSummary {
  repositories: Array<RepositorySummary>
}


const Repositories: NextPage = () => {

  const {data} = useSWR<RepositoriesSummary>('/api/repos', fetch)

  if (!data) return (<CircularProgress />);


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

      <Grid container spacing={4}>
      {data.repositories.map((repo) => (
        <ACard key={repo.id} title={repo.name} description={repo.teaser} href={'/repo/' + repo.id} />
      ))}
      </Grid>

    </Container>
    </>
  )
}

export default Repositories
