import React, { useState } from 'react'
import loginStyle from './login.module.scss'
import { Input, Button, Form, message, Spin } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { getUserInfo, setUserInfo } from 'utils/auth'
import { useNavigate, Navigate } from 'react-router-dom'

const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const onFinish = (values: { userName: string, password: string }): void => {
    setLoading(true)
    void message.success('登录成功')
    const timer = setTimeout(() => {
      setUserInfo({ userName: values.userName, token: 'gagag' })
      setLoading(false)
      navigate('/')
      clearTimeout(timer)
    }, 1000)
  }

  const userInfo = getUserInfo()
  if (userInfo != null) {
    return <Navigate to='/' replace />
  }

  return (
    <Spin spinning={loading}>
      <div className={loginStyle['login-container']}>
        <div className={loginStyle['login-box']}>
          <Form
            style={{ marginTop: '50px' }}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="userName"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>

            <Form.Item>
              <Button size="large" style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
                登 录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

    </Spin>

  )
}

export default Login
