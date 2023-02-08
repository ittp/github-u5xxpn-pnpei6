let yota = async () =>
  await fetch(
    'http://10.0.0.1/xml_action.cgi?method=get&module=duster&file=json_statistics1675558601000',
    {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'ru,en;q=0.9,cy;q=0.8,mt;q=0.7',
        authorization:
          'Digest username="", realm="undefined", nonce="undefined", uri="/cgi/xml_action.cgi", response="7364e4018f8e649f5fb0bb4b2b5545f9", qop=undefined, nc=0000040B, cnonce="8a1ec8f2875c6399"',
        'cache-control': 'no-cache',
        pragma: 'no-cache',
        'x-requested-with': 'XMLHttpRequest',
        Referer: 'http://10.0.0.1/status',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      body: null,
      method: 'GET',
    }
  );
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
