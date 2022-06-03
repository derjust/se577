// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"

import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
import { Octokit } from "@octokit/core";
import { parse, stringify } from 'yaml'
import { endianness } from "os";

interface GistDetail {
    id: string
    description: string | null,
    filesCount: number,
}

interface GistDetails {
    gists: Array<GistDetail>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GistDetails>
) {

  const session = await getSession({ req })
  if (session == null) {
    res.status(401).end();
    return;
  }
  const accessToken = session.accessToken;
  const octokit = new Octokit({ auth: session.accessToken });

  const { page } = req.query
  //pagination  
  const response = await octokit.request('GET /gists', {})

console.log(JSON.stringify(response.data))

  const payload = response.data.map(gist => {
    const x: GistDetail = {
         id: gist.id,
         description: gist.description,
         filesCount: Object.keys(gist.files).length
    }
    return x;
});

  res.status(200).json({gists: payload});
}
