import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../interfaces';

import { readdirSync, readFile, readFileSync } from 'fs';
import path from 'path';

// Fake users data
const files: any[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  // Get data from your database

  // let file = readFileSync('file1.csv');

  let pub = path.resolve('upload');

  let dir = readdirSync(pub);

  let data = dir.map((file) => {
    let filename = path.join(pub, file);

    let raw = readFileSync(filename, { charset: 'UTF-8' }).toString();

    console.log(raw);

    return raw;
  });

  let jsonData = Array.from(data);

  res.status(200).json(data);
}
