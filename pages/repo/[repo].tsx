import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import React, {useState } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import RepositoryTimelineComponent from "../../src/components/RepositoryTimelineComponent"
import Link from "../../src/Link"
import useSWR from 'swr'
import fetch from '../../src/fetch'

interface RepositoriyTimelineEvent {
  sha: string,
  url: string,
  timestamp: string | undefined,
  message: string,
}

interface RepositoryTimeline {
  events: Array<RepositoriyTimelineEvent>
}

const RepositoryTime: NextPage = () => {
  const router = useRouter()
  const { repo } = router.query
  const { data } = useSWR<RepositoryTimeline>(`/api/repo/${repo}`, fetch)

  let timeline;
  if (!data) {
    timeline = <CircularProgress />
  } else {
    timeline = <RepositoryTimelineComponent events={data.events} />
  }



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
