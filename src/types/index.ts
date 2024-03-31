import { z } from 'zod';
import {
  CurrencySchema,
  CryptoCurrencyResponseSchema,
  PairSchema,
} from '../schema/Cripto-schema';

export type Currency = z.infer<typeof CurrencySchema>;
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
export type Pair = z.infer<typeof PairSchema>;
