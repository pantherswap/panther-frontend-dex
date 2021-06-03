import { Currency, ETHER, Token } from '@pancakeswap-libs/sdk-v2'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'ETH'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
