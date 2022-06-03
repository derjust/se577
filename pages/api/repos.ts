// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"

import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
import { Octokit } from "@octokit/core";
import { parse, stringify } from 'yaml'
import { resolvePtr } from "dns";

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
  //pagination  
  const response = await octokit.request('GET /users/{username}/repos', {username: "derjust"})

  const payload = response.data.map(repo => {
    const x: RepositorySummary = {
         id: repo.id,
         url: repo.html_url,
         name: repo.name,
         description: repo.description
    }
    return x;
});

  res.status(200).json({repositories: payload});
}

