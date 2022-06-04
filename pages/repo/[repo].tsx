import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Link from "../../src/Link";
import useSWR from 'swr'
import fetch from '../../src/fetch'

interface RepositoryTimeline {
  events: Array<any>
}


const RepositoryTime: NextPage = () => {
  const router = useRouter()
  const { repo } = router.query

  const {data} = useSWR<RepositoryTimeline>(`/api/repo/${repo}`, fetch)

  let timeline = <></>
  //if (!data) {
  //  timeline = <CircularProgress />
  //}

  timeline = <Timeline>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Eat</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Code</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot />
    </TimelineSeparator>
    <TimelineContent>Sleep</TimelineContent>
    <TimelineContent>Sleep2</TimelineContent>
  </TimelineItem>
</Timeline>


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
          {repo} Repository Timeline
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Timeline of repository <Link href={`https://github.com/derjust/${repo}`}>{repo}</Link>
        </Typography>
      </Container>
    </Box>
    <Container sx={{ py: 8 }} maxWidth="md">

      {timeline}

    </Container>
    </>
  )
}

export default RepositoryTime