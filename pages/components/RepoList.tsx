import React, { ReactElement } from "react";

import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import useSWR from 'swr'

import ACard from './ACard'
import Link from "../../src/Link";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const RepositoryList: ReactElement = () => {
  const { data, error } = useSWR('/api/repos', fetcher)

  if (!data) return (<CircularProgress />);

  const repos = data.repositories;
  return (
    <Grid container spacing={4}>
    {repos.map((repo) => (
      <ACard title={repo.name} description={repo.teaser} href={'/repo/' + repo.id} />
    ))}
    </Grid>
  );
};

export default RepositoryList;
