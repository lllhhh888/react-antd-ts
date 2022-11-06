import React from 'react'
import { Modal, Form, Input } from 'antd'

interface Props {
  visible: boolean
  type: 0 | 1 //  0=新增 1=编辑
  onOk?: () => void
  onCancel?: () => void
}

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 }
}

const UserEditWindow: React.FC<Props> = (props) => {
  React.useEffect(() => {
    console.log(1111111111)
  }, [])

  const onOk = (): void => {
    form.submit()
    // if (props.onOk !== undefined) {
    //   props.onOk()
    // }
  }
  const onCancel = (): void => {
    if (props.onCancel !== undefined) {
      props.onCancel()
    }
  }

  const [form] = Form.useForm()

  const onFinish = (values: any): void => {
    console.log(values)
  }

  return (
    <Modal
            title={props.type === 0 ? '新增用户' : '编辑用户'}
            open={props.visible}
            centered={true}
            okText="确认"
            cancelText="取消"
            onOk={onOk}
            onCancel={onCancel}
        >
            <Form {...layout} labelAlign='left' form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item
                    name="note"
                    label="用户名"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
  )
}

export default UserEditWindow
