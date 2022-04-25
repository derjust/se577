// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"

import type { NextApiRequest, NextApiResponse } from 'next'
import { parse, stringify } from 'yaml'

interface Repository {
  id: string,
  description: string,
}

interface Data {
  repositories: List<Repository>
}

const repos = loadRepositories();

function loadRepositories() : Repositories[] {
  const file = fs.readFileSync('./repos.yml', 'utf8')
  const yaml = parse(file)

  console.log(`Loaded ${yaml.repositories.length} repositories`)

  return yaml.repositories
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  res.status(200).json({
    repositories: repos
  });
}
