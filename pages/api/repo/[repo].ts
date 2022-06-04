// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from "@octokit/core";

interface RepositoriyTimelineEvent {
  id: string,
  url: string,
  timestamp: string,
  title: string,
}

interface RepositoriyTimeline {
  events: Array<RepositoriyTimelineEvent>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RepositoriyTimeline>
) {
  
  const octokit = new Octokit(
    // no authentication here - just showing the public repos
  );

  const { repo, page } = req.query
  if (!repo) {
    res.status(400).end();
    return
  }
  const repoName: string = Array.isArray(repo) ? repo[0] : repo;

  const response = await octokit.request('GET /users/{username}/repos', {username: "derjust"})

  await octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: 'derjust',
    repo: repoName
  })


  const payload = response.data.map(repo => {
    const evt: RepositoriyTimelineEvent = {
         id: "",
         url: "",
         timestamp: "",
         title: "",
    }
    return evt;
});

  res.status(200).json({events: payload});
}

