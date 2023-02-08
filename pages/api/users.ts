import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../interfaces';

// Fake users data
let N = 100;

let a1 = Array.apply(null, { length: N }).map(Number.call, (i, k) => {
  // console.log(i);

  return { id: i + 1 };
});

const users: User[] = a1;

// const rooms: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  // Get data from your database

  console.log(users);
  res.status(200).json(users);
}
