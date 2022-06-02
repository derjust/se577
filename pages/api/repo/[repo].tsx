// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"

import type { NextApiRequest, NextApiResponse } from 'next'
import { parse, stringify } from 'yaml'


interface RepositoryDetails {
  description: string,
  teaser: string,
}

interface RepositoryYaml {
  id: string,
  description: string,
  teaser: string,
}

interface RepositoriesYaml {
  repositories: Array<RepositoryYaml>,
}

const repos = loadRepositories();

function loadRepositories() : Map<string, RepositoryDetails> {
  const file = fs.readFileSync('./repos.yml', 'utf8')
  const yaml: RepositoriesYaml = parse(file)

  console.log(`Loaded ${yaml} repositories`)

  return new Map(yaml.repositories.map(r => [r.id, { description: r.description, teaser: r.teaser} ] as [string, RepositoryDetails]))
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RepositoryDetails>
) {

  const { repo } = req.query

  // Query parameters can be specified multiple times
  const repoName: string = Array.isArray(repo) ? repo[0] : repo;

  const repoDetails = repos.get(repoName);

  if (repoDetails !== undefined) {
    res.status(200).json(repoDetails);
  } else {
    res.status(404)
  }
}
