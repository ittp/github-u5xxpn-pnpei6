import { EllipsisOutlined } from '@ant-design/icons';
import { CheckCard } from '@ant-design/pro-components';
import { Dropdown, message } from 'antd';

export default () => (
  <CheckCard
    avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
    title="title"
    description="desc"
    extra={
      <Dropdown
        placement="topCenter"
        menu={{
          onClick: ({ domEvent }) => {
            domEvent.stopPropagation();
            message.info('menu click');
          },
          items: [
            {
              label: '菜单',
              key: '1',
            },
            {
              label: '列表',
              key: '2',
            },
            {
              label: '表单',
              key: '3',
            },
          ],
        }}
      >
        <EllipsisOutlined
          style={{ fontSize: 22, color: 'rgba(0,0,0,0.5)' }}
          onClick={(e) => e.stopPropagation()}
        />
      </Dropdown>
    }
  />
);
