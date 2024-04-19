import { create } from "zustand";
import { devtools } from "zustand/middleware"
import { CryptoCurrency, CryptoData, SelectedCurrency } from "./types";
import { getCryptos, getPriceData } from "./services/CryptoService";

type CryptoStore ={
    cryptocurrencies: CryptoCurrency[]
    cryptoData:CryptoData
    fetchCryptos: () => Promise<void>
    fetchData: (selected: SelectedCurrency ) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set)=>({
    cryptocurrencies: [],
    cryptoData: {} as CryptoData,
    fetchCryptos: async ()=>{
        const cryptocurrencies = await getCryptos()
        set(()=>({
            cryptocurrencies
        }))
        
    },
    fetchData: async (selected)=>{
        const cryptoData = await getPriceData(selected)
        
        set(()=>({
            cryptoData
        }))
        
    }
})))