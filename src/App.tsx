import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MintHome from './routes/MintHome/MintHome'
import { AbstractWalletProvider } from '@abstract-foundation/agw-react'

import './App.css'


function App() {
  const config = {
    testnet: true, // Required
    rpc:'https://api.testnet.abs.xyz',
    // Optionally, provide your own RPC URL (learn more: https://viem.sh/docs/clients/transports/http.html)
    // transport: http("https://your.abstract.node.example.com/rpc") //Optional
  }
  return (
    <AbstractWalletProvider config={config}>
      <BrowserRouter>
        <section className="app">
          <Routes>
            <Route path="/" element={<MintHome />} />
            <Route path="/about" element={<div />} />
            <Route path="/contact" element={<div />} />
          </Routes>
        </section>
      </BrowserRouter>
    </AbstractWalletProvider>
  )
}

export default App
