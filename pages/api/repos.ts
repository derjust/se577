// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
import { Octokit } from "@octokit/core";

interface RepositorySummary {
  id: number,
  url: string,
  name: string,
  description: string | null,
}

interface RepositoriesSummary {
  repositories: Array<RepositorySummary>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RepositoriesSummary>
) {

  const session = await getSession({ req })
  
  const octokit = new Octokit(
    // no authentication here - just showing the public repos
  );

  const { page } = req.query
  const response = await octokit.request('GET /users/{username}/repos', {username: "derjust"})

  const payload = response.data.map(repo => {
    const summary: RepositorySummary = {
         id: repo.id,
         url: repo.html_url,
         name: repo.name,
         description: repo.description
    }
    return summary;
});

  res.status(200).json({repositories: payload});
}

