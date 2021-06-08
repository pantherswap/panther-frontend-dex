import React, { lazy, useContext } from 'react'
import { Menu as UikitMenu, ConnectorId } from '@pantherswap-libs/uikit'
import { BigNumber } from '@ethersproject/bignumber'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useLazyPrice from 'hooks/useLazyPrice'
import useGetPriceData from 'hooks/useGetPriceData'
// import useGetLocalProfile from 'hooks/useGetLocalProfile'
import { injected, bsc, walletconnect } from 'connectors'
import links from './config'

const Menu: React.FC = (props) => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const priceData = useGetPriceData()

  const lazyPrice = useLazyPrice()
  console.log(lazyPrice.toString())
  const pantherAddress = '0xF4308ae29c84238f3386C01d3CF6266AC6939ADE'
  const cakePriceUsd =
    priceData && priceData.data[pantherAddress] ? Number(priceData.data[pantherAddress].price) : Number(0)

  // const profile = useGetLocalProfile()

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={(connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        if (connectorId === 'bsc') {
          return activate(bsc)
        }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={lazyPrice.toNumber()}
      cakePriceLink={`https://bscscan.com/token/${pantherAddress}`}
      /* profile={profile} */
      {...props}
    />
  )
}

export default Menu
