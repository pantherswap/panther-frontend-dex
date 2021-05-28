import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import sleepy from './sleepy_.gif'

const Landing = () => {
  const [timer, setTimer] = useState('Start timer!!')
  useEffect(() => {
    setInterval(() => {
      const targetTime = new Date('2021-06-04T12:30:00')
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
          <SImage src="/%PUBLIC_URL%/images/lazymint_ticker.png" />
          Lazymint.Finanace
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
              <SImage src="/images/github.svg" />
              <SImage src="/images/twitter.svg" />
              <SImage src="/images/telegram.svg" />
              <SImage src="/images/medium.svg" />
              <SImage src="/images/books.svg" />
              {/* <SImage src={github} /> */}
            </SVImage>
          </div>
          <SWButton>
            <SButton>Go to App</SButton>
          </SWButton>
        </Overlay>
        <SBackground />
      </SParent>
    </SWrapper>
  )
}

export default Landing

const SParent = styled.div`
  width: 100%;
  text-align: center;
`
const SHeader = styled.div`
  display: flex;
  padding-top: 1%;
  font-size: 32px;
`

const SVImage = styled.div`
  // background: silver;
  display: flex;
  justify-content: center;
  margin: 1%;
`
const SImage = styled.img`
  padding: 0.5%;
  margin: 0.5%;
  width: 3%;
  filter: drop-shadow 5px 5px 5px white;
`

const SWTimer = styled.div`
  width: 100%;
  // background: purple;
`

const STimer = styled.div`
  font-size: 200px;
  color: ${({ theme }) => theme.colors.primary};
`
const SWrapper = styled.div`
  background: green;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100vw;
  height: 100vh;
`
const Overlay = styled.div`
  width: 100%;
  position: relative;
  top: 50%;
`

const OverlayTitle = styled.div`
  font-size: 80px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
`
const OverlayContents = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  padding: 0px 0px 10px;
`

const SBackground = styled.div`
  background: no-repeat center url(${sleepy});
  position: absolute;
  botton: 0px;
  width: 100%;
  height: 454px;
  margin: 200px 0px;
`
const SWButton = styled.div`
  position: relative;
`
const SButton = styled.button`
  padding: 8px 16px;
  width: 30%;
  // background: skyblue;
  // background: ${({ theme }) => theme.colors.success}
  border-radius: 10px;
  font-size: 32px;
`
