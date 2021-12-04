import React from 'react'
import { StatusBar } from 'react-native'
import Navigation from './src/Navigation'
import { GlobalProvider } from './src/contexts/GlobalContext'

export default function App() {
    return (
        <GlobalProvider>
            <StatusBar
                backgroundColor="#FFF"
                barStyle="dark-content" />
            <Navigation />
        </GlobalProvider>
    )
}
