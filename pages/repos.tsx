import type { NextPage } from 'next'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import ACard from '../src/components/ACard'
import Link from "../src/Link";

import useSWR from 'swr'
import fetch from '../src/fetch'


interface RepositorySummary {
  id: number,
  url: string,
  name: string,
  description: string,
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
          All the repositories of GitHub user <Link href="https://github.com/derjust/">derjust</Link>
        </Typography>
      </Container>
    </Box>
    <Container sx={{ py: 8 }} maxWidth="md">

      <Grid container spacing={4}>
      {data.repositories.map((repo) => (
        <ACard key={repo.id} title={repo.name} description={repo.description} href={repo.url} />
      ))}
      </Grid>

    </Container>
    </>
  )
}

export default Repositories
