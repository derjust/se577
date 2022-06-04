// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
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

/**
 * @swagger
 * /api/repos:
 *   get:
 *     summary: Returns public repositories of user derjust
 *     responses:
 *       200:
 *         description: Returns the repositories
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 repositories:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: technical ID of the repository
 *                       url:
 *                         type: string
 *                         format: uri
 *                       name:
 *                         type: string
 *                         description: name of the repository
 *                       description:
 *                         type: string
 *                         description: description of the repository provided by the author
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RepositoriesSummary>
) {
  
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

