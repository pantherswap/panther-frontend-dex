import React from "react"
import styled from "styled-components"

const Landing = () => {
  return (
    <TEST>
      안녕하세요!
    </TEST>
  );
}

export default Landing

const TEST = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`