import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

const Repository: NextPage = () => {
  const router = useRouter()
  const { repo } = router.query

  const { data, error } = useSWR(`/api/repo/${repo}`, fetcher)

  if (!data) return (<CircularProgress />);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          Repository
        </Typography>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {repo}
        </Typography>
        <Typography
          component="h3"
          variant="h4"
          align="center"
          gutterBottom
        >
          {data.teaser}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {data.description}
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
        </Stack>
      </Container>
    </Box>
  )
}

export default Repository
