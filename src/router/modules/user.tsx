import React from 'react'
import Index2 from '../../pages/user/index2'
import Home from '../../pages/home/home'
import { NprogressComm } from '../../comm/nprogress/NprogressComm'
const Index1 = React.lazy(async () => await import('../../pages/user/index1'))
export default {
  path: '/user',
  element: <Home/>,
  children: [
    {
      path: 'index1',
      element: <NprogressComm>
             <Index1/>
          </NprogressComm>
    },
    {
      path: 'index2',
      element: <NprogressComm><Index2/></NprogressComm>
    }
  ]
}
