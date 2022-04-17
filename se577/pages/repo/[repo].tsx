import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const Repository: NextPage = () => {
  const router = useRouter()
  const { repo } = router.query

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
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Repository {repo}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Here will be the repository details
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
