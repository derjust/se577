// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"

import type { NextApiRequest, NextApiResponse } from 'next'
import { parse, stringify } from 'yaml'

interface RepositorySummary {
  id: string,
  description: string,
}

interface RepositoriesSummary {
  repositories: Array<RepositorySummary>
}

const repos = loadRepositories();

function loadRepositories() : RepositorySummary[] {
  const file = fs.readFileSync('./repos.yml', 'utf8')
  const yaml: RepositoriesSummary = parse(file)

  console.log(`Loaded ${yaml.repositories.length} repositories`)

  return yaml.repositories
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RepositoriesSummary>
) {

  res.status(200).json({
    repositories: repos
  });
}
