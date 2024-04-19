import { useCryptoStore } from "../store"
import { currencies } from "../data"
import { useState, ChangeEvent, FormEvent } from "react"
import { SelectedCurrency } from "../types"
import Error from "./Error"


const Form = () => {

    const cryptos =useCryptoStore((state)=>state.cryptocurrencies)
    const {fetchData}= useCryptoStore()

    const [selected, setSelected]=useState<SelectedCurrency>({
        currency:"",
        cryptocurrency:"", 
    })

    const [error, setError]= useState('')

    const handleChange=(e: ChangeEvent<HTMLSelectElement>)=>{
        setSelected({
            ...selected, 
            [e.target.name]: e.target.value,
        })
        
    }


    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(Object.values(selected).includes('')){
            setError('All Feilds are Required')
            return
        }

        setError('')
        fetchData(selected)
    }


  return (
    <form className="form" onSubmit={handleSubmit}>

        {error && <Error>{error}</Error>}

        <div className="field">

            <label htmlFor="currency">Currency</label>
            <select name="currency" id="currency" onChange={handleChange} value={selected.currency}>

                <option value="">-- Select a Currency --</option>
                
                {currencies.map(currency=>(
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    )
                )}

            </select>
        </div>


        <div className="field">

            <label htmlFor="cryptocurrency">Cryptocurrency</label>
            <select name="cryptocurrency" id="cryptocurrency"onChange={handleChange} value={selected.cryptocurrency}>

                <option value="">-- Select a Cryptocurrency --</option>

                {cryptos.map(crypto=>(
                    <option 
                        key={crypto.CoinInfo.Name} 
                        value={crypto.CoinInfo.Name}
                    >{crypto.CoinInfo.FullName}</option>    
                ))}
            </select>
        </div>

        <input type="submit" value="Calculate"/>
    </form>
  )
}

export default Form