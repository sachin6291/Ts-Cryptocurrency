import { useMemo } from "react";
import { useCryptoStore } from "../store"
import Spinner from "./Spinner";


const CryptoDisplay = () => {
    const {cryptoData,selected, loading} = useCryptoStore()
    
   
    const hasData = useMemo(()=> Object.keys(cryptoData).length === 0,[cryptoData])
    
  return (
    <div className="wrapper">
    {loading ? <Spinner/> : !hasData && (
        <div>
            <h2>Price of {selected.cryptocurrency}  </h2>
            <div className="result">
                <img src={`https://cryptocompare.com/${cryptoData.IMAGEURL}`} alt="cryptocurrency logo"/>
                <div>
                    <p>1 {cryptoData.FROMSYMBOL} = <span>{cryptoData.PRICE}</span></p>
                    <p>Highest price of the Day = <span>{cryptoData.HIGHDAY}</span></p>
                    <p>Lowest price of the Day = <span>{cryptoData.LOWDAY}</span></p>
                    <p>Percentage Change in 24h = <span>{cryptoData.CHANGEPCT24HOUR}%</span></p>
                    <p>Last Updated: <span>{cryptoData.LASTUPDATE}</span></p>
                </div>
            </div>
        </div>
    )}
    </div>
  )
}

export default CryptoDisplay