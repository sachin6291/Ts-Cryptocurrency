import axios from "axios";
import { CryptoDataSchema, CryptosResponseSchema } from "../schema/crypto-schema";
import { SelectedCurrency } from "../types";

export const getCryptos = async()=>{
    const url =`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
    const {data: {Data}} = await axios(url)
    const result = CryptosResponseSchema.safeParse(Data)
    if (result.success){
        return result.data
    }
        
}

export const getPriceData = async(selected:SelectedCurrency)=>{
    const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selected.cryptocurrency}&tsyms=${selected.currency}`
    const {data: {DISPLAY}} = await axios(url)
    const result = CryptoDataSchema.safeParse(DISPLAY[selected.cryptocurrency][selected.currency])
    if (result.success){
        return result.data
    }
    
    
}