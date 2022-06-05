import React, { ReactElement } from "react";
import Link from "../../src/Link";

import Typography from '@mui/material/Typography';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

interface RepositoriyTimelineEvent {
  sha: string,
  url: string,
  timestamp: string | undefined,
  message: string,
}

type RepositoryTimelineComponentProps = {
    events: Array<RepositoriyTimelineEvent>
}

const RepositoryTimelineComponent = ({
  events
}: RepositoryTimelineComponentProps) : ReactElement => {
  return (
  <Timeline>
    {events.map(evt => { return (
      <TimelineItem key={evt.sha}>
      <TimelineOppositeContent color="text.secondary">
        {evt.timestamp}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Link color="inherit" href={evt.url} passHref>
          <Typography component="span" color="text.secondary">
            {evt.sha}
          </Typography>
        </Link>
        {evt.message.split("\n").map(line => { return(
        <Typography key={line} color="text.primary" component="p">{line}</Typography>
      )})}</TimelineContent>
    </TimelineItem>
    )
    })}
    
  </Timeline>
  );
};

export default RepositoryTimelineComponent;
