import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MintHome from './routes/MintHome/MintHome'
import { AbstractWalletProvider } from '@abstract-foundation/agw-react'
import { NETWORK } from './contracts/addresses'
import { QueryClient } from '@tanstack/react-query'

import './App.css'


function App() {

  return (
    <AbstractWalletProvider chain={NETWORK} queryClient={new QueryClient()} >
      <BrowserRouter>
        <section className="app">
          <Routes>
            <Route path="/" element={<MintHome />} />
          </Routes>
        </section>
      </BrowserRouter>
    </AbstractWalletProvider>
  )
}

export default App
