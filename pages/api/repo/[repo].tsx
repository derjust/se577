// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"

import type { NextApiRequest, NextApiResponse } from 'next'
import { parse, stringify } from 'yaml'

interface RepositoryDetails {
  description: string,
  teaser: string
}

const repos = loadRepositories();

function loadRepositories() : Map<string, Repository> {
  const file = fs.readFileSync('./repos.yml', 'utf8')
  const yaml = parse(file)

  console.log(`Loaded ${yaml} repositories`)

  return new Map(yaml.repositories.map(r => [r.id, { description: r.description, teaser: r.teaser} ] as [string, RepositoryDetails]))
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RepositoryDetails>
) {

  const { repo } = req.query

  if (repos.has(repo)) {
    res.status(200).json({
      ...repos.get(repo)
    });
  } else {
    res.status(404)
  }
}
