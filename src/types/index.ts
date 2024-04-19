import { CryptoDataSchema, CryptoResponseSchema, CurrencySchema, SelectedSchema } from '../schema/crypto-schema'
import { z } from 'zod'

export type Currency = z.infer<typeof CurrencySchema>

export type CryptoCurrency = z.infer<typeof CryptoResponseSchema>

export type SelectedCurrency = z.infer<typeof SelectedSchema>

export type CryptoData = z.infer<typeof CryptoDataSchema>