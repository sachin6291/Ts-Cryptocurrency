import { useEffect } from "react"
import Form from "./components/Form"
import { useCryptoStore } from "./store"
import CryptoDisplay from "./components/CryptoDisplay"

function App() {

  const {fetchCryptos} =useCryptoStore()

  useEffect(()=>{fetchCryptos()},[])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          <span>Crypto</span>currency
        </h1>
        <div className="content">
          <Form/>
          <CryptoDisplay/>
        </div>
      </div>
    </>
  )
}

export default App
