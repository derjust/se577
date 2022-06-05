import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
import { Octokit } from "@octokit/core";

interface GistDetail {
    id: string
    description: string | null,
    filesCount: number,
}

interface GistDetails {
    gists: Array<GistDetail>
}

/**
 * @swagger
 * /api/gists:
 *   get:
 *     summary: Returns private gists
 *     responses:
 *       200:
 *         description: Returns the private gists of the logged in user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 gists:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       description:
 *                         type: string
 *                       filesCount:
 *                         type: integer
 *                         minimum: 0
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GistDetails>
) {

  const session = await getSession({ req })
  if (session == null) {
    res.status(401).end();
    return;
  }

  const octokit = new Octokit({ auth: session.accessToken });

  const { page } = req.query
  const response = await octokit.request('GET /gists', {})

  const payload = response.data.map(gist => {
    const gistDetail: GistDetail = {
         id: gist.id,
         description: gist.description,
         filesCount: Object.keys(gist.files).length
    }
    return gistDetail;
});

  res.status(200).json({gists: payload});
}
