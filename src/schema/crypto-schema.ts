import { z } from 'zod'

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

export const CryptoResponseSchema = 
    z.object({
        CoinInfo: z.object({
            FullName: z.string(),
            Name: z.string()
        })
    })

export const CryptosResponseSchema = z.array(CryptoResponseSchema)

export const SelectedSchema = z.object({
    currency:z.string(),
    cryptocurrency:z.string()
})

export const CryptoDataSchema = z.object({
    FROMSYMBOL: z.string(),
    IMAGEURL: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string(),
    PRICE: z.string()
})