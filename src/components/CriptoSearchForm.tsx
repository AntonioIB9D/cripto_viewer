import { useState, ChangeEvent } from 'react';
import { currencies } from '../data';
import { useCryptoStore } from '../store/store';
import type { Pair } from '../types';

export default function CriptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };
  const [pair, setPair] = useState<Pair>({
    currency: '',
    cryptocurrency: '',
  });

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency" onChange={handleChange}>
          <option value="">--Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cryptocurrency">Criptomoneda:</label>
        <select
          name="cryptocurrency"
          id="cryptocurrency"
          onChange={handleChange}
        >
          <option value="">--Seleccione --</option>
          {cryptocurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="cotizar" />
    </form>
  );
}
