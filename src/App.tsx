import { useEffect } from "react"
import Form from "./components/Form"
import { useCryptoStore } from "./store"

function App() {

  const {fetchCryptos} =useCryptoStore()

  useEffect(()=>{},[])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          <span>Crypto</span>currency
        </h1>
        <div className="content">
          <Form/>
        </div>
      </div>
    </>
  )
}

export default App
