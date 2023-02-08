import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../interfaces';

// Fake users data
let N = 1000;
let a1 = Array.apply(null, { length: N }).map(Number.call, (i, k) => {
  // console.log(i);

  return { id: i + 1 };
});

const users: User[] = a1;


// const rooms: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }]
export const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

export const columns = [
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  let { query } = _req;
  // Get data from your database

  console.log(users);

  res.status(200).json(columns, dataSource, users);
}
