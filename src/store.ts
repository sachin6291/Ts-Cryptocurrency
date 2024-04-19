import { create } from "zustand";
import { devtools } from "zustand/middleware"
import { CryptoCurrency, CryptoData, SelectedCurrency } from "./types";
import { getCryptos, getPriceData } from "./services/CryptoService";

type CryptoStore ={
    cryptocurrencies: CryptoCurrency[]
    cryptoData:CryptoData
    selected:SelectedCurrency
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (selected: SelectedCurrency ) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set)=>({
    cryptocurrencies: [],
    cryptoData: {} as CryptoData,
    selected: {} as SelectedCurrency,
    loading:false,
    fetchCryptos: async ()=>{
        const cryptocurrencies = await getCryptos()
        set(()=>({
            cryptocurrencies
        }))
        
    },
    fetchData: async (selected)=>{
        set(()=>({
            loading:true
        }))
        const cryptoData = await getPriceData(selected)
        
        set(()=>({
            cryptoData,
            selected,
            loading:false
        }))
        
    }
})))