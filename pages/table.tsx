import type { User } from '../interfaces';
import useSwr from 'swr';
import Link from 'next/link';

import { parser, generator } from 'csv';

import Axios from 'axios';
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
} from 'react';

import { Table } from 'antd';

const fetcher = (url: string) =>
  Axios.request({ url }).then((response) => {
    let { data, headers, status } = response;

    console.log(data, status);

    if (status == 200) {
    }

    let jsonData = JSON.stringify(data);

    return data;
  });

const fetcherF = (url: string) => fetch(url).then((res) => res.json());

// const TableData = fetcherF({ url: '' });

const dataSource = [
  {
    key: '1',
    name: 'S1',
    ping: 32,
    address: 'S1',
    host: {
      name: '8.8.8.8',
    },
  },
  {
    key: '2',
    name: 'S2',
    ping: 1,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Hostname',
    dataIndex: 'host',
    key: 'host',
    render: (v: any) => {
      console.log(v);
      return <div>1</div>;
    },
  },
  {
    title: 'Ping',
    dataIndex: 'ping',
    key: 'ping',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

let LoadingStatus = ({ data: any }) => {
  let statusText = {
    200: 'Success',
    403: 'Forbidden',
  };

  let { error, data, isLoading } = data;
  if (error) return <div>Loading Error</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
};

export default function TableView() {
  const { data, error, isLoading } = useSwr<User[]>('/api/data', fetcher);

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return <Table dataSource={dataSource} columns={columns} />;

  // return (
  //   <ul>
  //     {data.map((user) => (
  //       <li key={user.id}>
  //         <Link href="/user/[id]" as={`/user/${user.id}`}>
  //           {user.name ?? `User ${user.id}`}
  //         </Link>
  //       </li>
  //     ))}
  //   </ul>
  // );
}
