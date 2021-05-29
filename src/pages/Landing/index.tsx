import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import sleepy from './sleepy_.gif'
// import sleepy from '/images/'

const Landing = () => {
  const [timer, setTimer] = useState('Start timer!!')
  useEffect(() => {
    setInterval(() => {
      const targetTime = new Date('2021-06-03T18:30:00')
      const _now = Date.now()
      const leftTime = targetTime.getTime() - _now
      const dateObj = new Date(leftTime)
      const formattedTime = `
      ${(dateObj.getUTCDate() - 1).toString().padStart(2, '0')}:${dateObj
        .getUTCHours()
        .toString()
        .padStart(2, '0')}:${dateObj
        .getUTCMinutes()
        .toString()
        .padStart(2, '0')}:${dateObj.getUTCSeconds().toString().padStart(2, '0')}`
      setTimer(formattedTime)
    }, 1000)
  }, [])

  return (
    <SWrapper>
      <SParent>
        <SHeader>
          <SLogo src="/images/lazymint_ticker.svg" />
          <p>Lazymint.Finanace</p>
        </SHeader>
        <Overlay>
          <OverlayTitle>LazyMint</OverlayTitle>
          <OverlayContents>
            <p>Yield farming project</p> <p>on Bianace Smart Chain</p>
          </OverlayContents>
          <SWTimer>
            <STimer>{timer}</STimer>
          </SWTimer>
          <div>
            <SVImage>
              <a href="https://github.com/lazymint" target="blank">
                <SImage src="/images/github.svg" />
              </a>
              <a href="https://twitter.com/LazyMintFi" target="blank">
                <SImage src="/images/twitter.svg" />
              </a>
              <a href="https://t.me/LazyMintChat" target="blank">
                <SImage src="/images/telegram.svg" />
              </a>
              <a href="https://medium.com/@LazyMint" target="blank">
                <SImage src="/images/medium.svg" />
              </a>
              <a href="https://www.reddit.com/r/LazyMintOfficial/" target="blank">
                <SImage src="/images/reddit.svg" />
              </a>
              <a href="https://docs.lazymint.finance" target="blank">
                <SImage src="/images/books.svg" />
              </a>
            </SVImage>
          </div>
          <SWButton>
            <SButton>Go to App</SButton>
          </SWButton>
        </Overlay>
        <div>
          <SBackground src={sleepy} />
        </div>
      </SParent>
    </SWrapper>
  )
}

export default Landing

const SParent = styled.div`
  // width: 100%;
  text-align: center;
`
const SHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  font-size: 24px;
  color: white;
`
const SVImage = styled.div`
  // background: silver;
  display: flex;
  justify-content: center;
  // margin: 2%;
  margin-top: 5%;
`
const SImage = styled.img`
  width: 38px;
  margin: 0 8px 24px;
  filter: drop-shadow 5px 5px 5px white;
`
const SLogo = styled.img`
  width: 38px;
  margin-right: 8px;
  filter: drop-shadow 5px 5px 5px white;
`

const SWTimer = styled.div`
  width: 100%;
`

const STimer = styled.div`
  font-size: 60px;
  color: ${({ theme }) => theme.colors.primary};
`
const SWrapper = styled.div`
  // height: 100vh;
`
const Overlay = styled.div`
  margin-top: 10%;
  // width: 100%;
  // top: 50%;
`

const OverlayTitle = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
`
const OverlayContents = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  padding: 0px 0px 10px;
`

const SBackground = styled.img`
  width: 90%;
  margin-top: 100px;
`
const SWButton = styled.div`
  position: relative;
`
const SButton = styled.button`
  padding: 8px 16px;
  width: 350px;
  background: ${({ theme }) => theme.colors.success};
  border-radius: 50px;
  font-size: 32px;
`
