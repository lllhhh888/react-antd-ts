import React, { useState } from 'react'
import { Table, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { setMenuTab, setMenuActive } from 'store/modules/app'
const UserEditWindow = React.lazy(async () => await import('components/sysetting/user/UserEditWindow'))

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  },
  {
    key: '3',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '4',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  },
  {
    key: '5',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '6',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  },
  {
    key: '7',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '8',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }

]

const User: React.FC = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setMenuTab({ title: '用户管理', path: '/sysettings/user' }))
    dispatch(setMenuActive('/sysettings/user'))
  }, [])

  const [userEditWindowVisible, setUserEditWindowVisible] = useState<boolean>(false)
  const [userEditType, setUserEditType] = useState<0 | 1>(0)

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: '操作',
      width: 200,
      render: (text: any, record: any, index: any) => {
        return (
        <div>
          <Button type='primary' size="small" onClick={ () => {
            setUserEditType(1)
            setUserEditWindowVisible(true)
          }}>编辑</Button>
          <Button type='primary' danger size="small" className='ml-10'>删除</Button>
        </div>
        )
      }
    }
  ]
  return (
    <div>
      <div className='top-box'>
        <Button
          type='primary'
          onClick={() => { setUserEditWindowVisible(true); setUserEditType(0) }}
        >
          新增
        </Button>
      </div>
      <Table
        loading={false}
        bordered={true}
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }} />
       {
        userEditWindowVisible && <UserEditWindow
        type={userEditType}
        visible={userEditWindowVisible}
        onOk={ () => { setUserEditWindowVisible(false) }}
        onCancel={ () => { setUserEditWindowVisible(false) }}
        />
       }
    </div>
  )
}

export default User
