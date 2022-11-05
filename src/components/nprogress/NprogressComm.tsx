import React, { Suspense, Fragment, ReactNode } from 'react'
import nprogress from 'nprogress'
export const SusFallBack = (): ReactNode => {
  nprogress.start()
  React.useEffect(() => {
    nprogress.done()
  })
  return (
      <Fragment></Fragment>
  )
}

export const NprogressComm = ({ children }: any): any => {
  return (
      <Suspense fallback={SusFallBack()}>
      {children}
      </Suspense>
  )
}
