import React, { useEffect } from 'react'
import { login } from 'api/user'

interface LoginProps {
  name?: string
}

const Login: React.FC<LoginProps> = () => {
  useEffect(() => {
    login().then(() => {
      console.log(1111)
    }).catch(() => {
      console.log(222)
    })
    return () => {}
  })

  return (
    <div>
      login
    </div>
  )
}

export default Login
