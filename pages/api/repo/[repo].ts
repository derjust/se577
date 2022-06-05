import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from "@octokit/core";

interface RepositoriyTimelineEvent {
  sha: string,
  url: string,
  timestamp: string | undefined,
  message: string,
}

interface RepositoriyTimeline {
  events: Array<RepositoriyTimelineEvent>
}

/**
 * @swagger
 * /api/repo/{repo}:
 *   get:
 *     summary: Returns repository timeline
 *     parameters:
 *       - in: path
 *         name: repo
 *         type: string
 *         required: true
 *         description: repository name
 *     responses:
 *       400:
 *         description: Required input paramters are missing
 *       200:
 *         description: Returns the repository timeline
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 events:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       sha:
 *                         type: string
 *                       url:
 *                         type: string
 *                         format: uri
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                       message:
 *                         type: string
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RepositoriyTimeline>
) {
  
  const octokit = new Octokit(
    // no authentication here - just showing the public repos
  );

  const { repo } = req.query
  if (!repo) {
    res.status(400).end();
    return
  }
  const repoName: string = Array.isArray(repo) ? repo[0] : repo;

  const response = await octokit.request('GET /repos/{owner}/{repo}/commits?sha={sha}', {
    owner: 'derjust',
    repo: repoName,
  })


  const payload = response.data.map((commit: { sha: any; html_url: any; commit: { author: { date: any; }; message: any; }; }) => {
    const evt: RepositoriyTimelineEvent = {
         sha: commit.sha,
         url: commit.html_url,
         timestamp: commit.commit.author?.date ,
         message: commit.commit.message,
    }
    return evt;
});

  res.status(200).json({events: payload});
}
