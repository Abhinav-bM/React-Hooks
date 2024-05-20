import React from 'react'
import Child from './Child'
import LoginContextProvider from '../context/LoginContextProvider'

function Parent() {
  return (
    <LoginContextProvider>
        <Child />
    </LoginContextProvider>
  )
}

export default Parent
