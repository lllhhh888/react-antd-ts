import React, { Fragment } from 'react'
import { Navigate } from 'react-router-dom'
import { getUserInfo } from '../utils/auth'

interface AuthenticationProps {
  children: React.ReactElement
}

const Authentication: any = ({ children }: AuthenticationProps) => {
  console.log(children)
  const userInfo = getUserInfo()
  return (
    <Fragment>
        { (userInfo != null) ? children : <Navigate to='/login' replace/>}
    </Fragment>
  )
}

export default Authentication
