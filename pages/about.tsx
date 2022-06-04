import type { NextPage } from 'next'
import React, {useState } from "react";
import { useSession } from "next-auth/react"

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Octokit } from "@octokit/core";

async function loadMeInfos(setter: React.Dispatch<React.SetStateAction<string>>) {
  const octokit = new Octokit(
    // no authentication here - just showing the public repos
  );
  setter("Loading...")

  const { data } = await octokit.request('GET /users/{username}', {username: "derjust"})

  setter(JSON.stringify(data))
}

async function loadYourInfos(accessToken: string, setter: React.Dispatch<React.SetStateAction<string>>) {
  const octokit = new Octokit({auth: accessToken});
  setter("Loading...")

  try {
    const { data } = await octokit.request('GET /user', {})
    setter(JSON.stringify(data))
  } catch (e) {
    setter("Request failed: " + e +"\nPlease login first!")
  }
}

const About: NextPage = () => {

  const { data: session, status } = useSession()

  const [meInfos, setMeInfos] = useState("")
  const [yourInfos, setYourInfos] = useState("")

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Grid container spacing={4}>
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
            <Button variant="contained" color="success" onClick={() => loadMeInfos(setMeInfos)}>Unauthorized</Button>
          </Typography>
          <TextField
            label="derjust infos"
            placeholder="Press button to load derjust infos"
            value={meInfos}
            inputProps={{style: {fontFamily: "monospace"}}}
            multiline fullWidth
            />
        </Container>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            About you
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            <Button variant="contained" color={status == "authenticated" ? "success" : "error"}
              onClick={() => loadYourInfos(session?.accessToken as string, setYourInfos)}>Authorized</Button>
         
          </Typography>
          <TextField
            label="your infos"
            placeholder="Press button to load your infos"
            value={yourInfos}
            inputProps={{style: {fontFamily: "monospace"}}}
            multiline fullWidth
            />
        </Container>
        </Grid>
    </Box>
  )
}

export default About
