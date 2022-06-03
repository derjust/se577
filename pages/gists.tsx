import type { NextPage } from 'next'
import { useSession } from "next-auth/react"

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import ACard from '../src/components/ACard'

import useSWR from 'swr'
import fetch from '../src/fetch'

interface GistDetail {
  id: string
  description: string,
  filesCount: number,
}

interface GistDetails {
  gists: Array<GistDetail>
}

const Gists: NextPage = () => {
  const { data: session, status } = useSession({required: true})

  const {data} = useSWR<GistDetails>('/api/gists', fetch)

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
          Gists
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          All your gists, {session?.user?.name} - enjoy!
        </Typography>
      </Container>
    </Box>
    <Container sx={{ py: 8 }} maxWidth="md">

      <Grid container spacing={4}>
      {data.gists.map((gist) => (
        <ACard key={gist.id} title={gist.description} description="0 files" href={'/gist/' + gist.id} />
      ))}
      </Grid>

    </Container>
    </>
  )
}

export default Gists
