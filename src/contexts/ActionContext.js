import React, { createContext, useState } from 'react'

const ActionContext = createContext({})

export function Provider ({ children }) {
  return (
    <ActionContext.Provider>
      {children}
    </ActionContext.Provider>
  )
}

export default ActionContext
