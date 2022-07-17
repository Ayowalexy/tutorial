import React, { createContext, useState } from 'react'

export const NetworkContext = createContext({
    isConnected: false,
    setIsConnected: () => null,
})

export const NetworkProvider =({ children }) => {
    const [isConnected, setIsConnected] = useState(false)
    const value = { isConnected, setIsConnected }

    return <NetworkContext.Provider value={value}>{children}</NetworkContext.Provider>
}
