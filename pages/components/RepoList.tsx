import React, { ReactElement } from "react";

import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import useSWR from 'swr'
import fetch from '../../libs/fetch'


import ACard from './ACard'
import Link from "../../src/Link";


interface RepositorySummary {
  id: string,
  name: string,
  teaser: string,
}

interface RepositoriesSummary {
  repositories: Array<RepositorySummary>
}


//const fetcher = (...args: any) => fetch(...args).then(res => res.json())


const RepositoryList = () : ReactElement => {
  const {data} = useSWR<RepositoriesSummary>('/api/repos', fetch)

  if (!data) return (<CircularProgress />);

  const repos = data.repositories;
  return (
    <Grid container spacing={4}>
    {repos.map((repo) => (
      <ACard key={repo.id} title={repo.name} description={repo.teaser} href={'/repo/' + repo.id} />
    ))}
    </Grid>
  );
};

export default RepositoryList;
