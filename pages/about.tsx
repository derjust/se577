import type { NextPage } from 'next'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const About: NextPage = () => {
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
          About me
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Hello, world!
        </Typography>
      </Container>
    </Box>
  )
}

export default About
