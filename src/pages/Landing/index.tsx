import React, { useState } from 'react'
import styled from 'styled-components'
import sleepy from './sleepy_.gif'

const Landing = () => {
  const [timer, setTimer] = useState('')
  return (
    <SWrapper>
      <Overlay>
        <OverlayTitle>LazyMin</OverlayTitle>
        <OverlayContents>
          <p>Yield farming project</p> <p>on Bianace Smart Chain</p>
          {/* <SButton>
          </SButton> */}
        </OverlayContents>
      </Overlay>
      <SBackground />
    </SWrapper>
  )
}

export default Landing

const SWrapper = styled.div`
  padding: 43%;
`
const Overlay = styled.div`
  // background-color: ${({ theme }) => theme.colors.background};
  background-color: #ffff00;
  width: 100%;
  height: 100%;
  text-align: center;
`

const OverlayTitle = styled.div`
  font-size: 48px;
`
const OverlayContents = styled.div`
  font-size: 24px;
`

const SBackground = styled.div`
  background-image: url(${sleepy});
  width: 700px;
  height: 200px;
`
const SButton = styled.div``
