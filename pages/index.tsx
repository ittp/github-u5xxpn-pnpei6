import type { Data, User } from '../interfaces';
import useSwr from 'swr';
import Link from 'next/link';

import { Button } from 'antd';

import ping from 'tcp-ping';
import {
  Row,
  Table,
  List,
  Space,
  DatePicker,
  Input,
  InputNumber,
  Form,
  Drawer,
} from 'antd';

import { parser, generator } from 'csv';

import Axios from 'axios';
import { useState, Component, useEffect } from 'react';

import {
  DataTable,
  SearchResponse,
  RowAction,
  SearchInfo,
} from 'antd-data-table';

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

let UsersLink = (data) =>
  data.map((user) => (
    <li key={user.id}>
      <Link href="/user/[id]" as={`/user/${user.id}`}>
        {user.name ?? `User ${user.id}`}
      </Link>
    </li>
  ));
let DataForm = (data: any) => {
  let Item = ({ key, name, label, value }) => (
    <Form.Item name={name} label={label} key={key}>
      <Input defaultValue={value} />
    </Form.Item>
  );

  let NumberItem = 'InputNumber';
};

export default function Index({ ...props }) {
  const [configuration, setConfiguration] = useState(props.configuration);

  const { data, error, isLoading } = useSwr<Data[]>('/api/data', fetcherF);

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  const dataSource = [
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

  const columnsDemo = [
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

  let dataS = [
    {
      id: 0,
      key: 'VZ',
      name: 'Check-VZ-D50',
      ip: '109.188.143.21',
      port: '55445',
      state: 1,
    },
  ];

  const columns = [
    {
      title: 'key',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'ip',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: 'port',
      dataIndex: 'port',
      key: 'port',
    },
    {
      title: 'state',
      dataIndex: 'state',
      render: (v) => {
        let state = v == 1 ? 'true' : 'false';

        return <div>{state}</div>;
      },
    },
  ];

  const getDataSource = (key) => {
    let url;
    if (key) {
      url = `/api/${key}`;
    } else {
      url = `/api/data`;
    }

    const { data, error, isLoading } = useSwr<Data[]>(url, fetcherF);

    return data;
  };

  const getColumns = (dataSource) => {};
  let config: any = {
    drawer: { open: false, closable: true, width: '60vw' },
    table: { columns: columns, dataSource: dataS },
  };

  return (
    <>
      <Table
        bordered
        showHeader={true}
        //dataSource={dataSource}
        //columns={columns}
        {...config.table}
      />

      <Drawer {...config.drawer}></Drawer>
    </>
  );
}
