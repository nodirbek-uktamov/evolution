import React, { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export function GlobalProvider({ children }) {
    const [user, setUser] = useState(null)
    const [headerOptions, setHeaderOptions] = useState({})

    return (
        <GlobalContext.Provider value={{
            user,
            headerOptions,
            setHeaderOptions,
            setUser,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
