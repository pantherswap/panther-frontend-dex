import react, { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useContract } from './useContract'
import lp from '../constants/abis/lp.json'
import erc20 from '../constants/abis/erc20.json'
import { useActiveWeb3React } from './index'

const useLazyPrice = () => {
  const { chainId } = useActiveWeb3React()
  const [lazyPrice, setLazyPrice] = useState<BigNumber>(new BigNumber(0))

  const lazyBusdAddress = '0x159804ce45b5303f5bfe894d8a51bfb41ab296b5'
  const busdAddress = '0xe9e7cea3dedca5984780bafc599bd69add087d56'
  const lazyAddress = '0xf4308ae29c84238f3386c01d3cf6266ac6939ade'

  const lpContract = useContract(lazyBusdAddress, lp)
  const busdContract = useContract(busdAddress, erc20)
  const lazyContract = useContract(lazyAddress, erc20)

  useEffect(() => {
    if (chainId === undefined) {
      return
    }
    const fetchData = async () => {
      if (!busdContract || !lazyContract) {
        return
      }
      const quoteTokenBalanceLP = await busdContract?.balanceOf(lazyBusdAddress)
      const TokenBalanceLP = await lazyContract?.balanceOf(lazyBusdAddress)
      const bQouteTokenBalaneLP = new BigNumber(quoteTokenBalanceLP.toString())
      const bTokenBalanceLP = new BigNumber(TokenBalanceLP.toString())
      const ratio = bQouteTokenBalaneLP.div(bTokenBalanceLP)
      setLazyPrice(ratio)
    }
    fetchData()
  }, [chainId, busdContract, lazyContract])
  return lazyPrice
}

export default useLazyPrice
