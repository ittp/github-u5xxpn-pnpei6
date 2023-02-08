import React, { Component } from 'react';
import { DataTable, SearchField } from 'antd-data-table';
import axios from 'axios';


export default class TableView extends Component {
  searchFields: SearchField[] = [
    {
      label: 'ID',
      name: 'id',
      type: 'input',
      payload: {
        props: {
          placeholder: 'placeholder',
        },
      },
    },
    {
      label: 'Select',
      name: 'select',
      type: 'select',
      payload: {
        options: [
          { key: '1', label: 'one', value: '1' },
          { key: '2', label: 'two', value: '2' },
          { key: '3', label: 'three', value: '3' },
        ],
      },
    },
  ];

  columns: TableColumnConfig<any>[] = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'title',
      title: 'Title',
      dataIndex: 'title',
    },
  ];

  expands: Expand[] = [
    {
      title: 'Body',
      dataIndex: 'body',
      render(value) {
        return value && `${value.substr(0, 100)} ...`;
      },
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
    },
  ];

  onSearch = async ({ page, pageSize, values }) => {
    const res = await axios.get('http://jsonplaceholder.typicode.com/posts', {
      params: {
        _page: page,
        _limit: pageSize,
        ...values,
      },
    });
    return {
      dataSource: res.data,
      total: Number(res.headers['x-total-count']),
    };
  };

  render() {
    return (
      <DataTable
        rowKey={(record) => record.id}
        searchFields={this.searchFields}
        initialColumns={this.columns}
        initialExpands={this.expands}
        onSearch={this.onSearch}
      />
    );
  }
}
// render(
//   ,
//   mountNode
// );
