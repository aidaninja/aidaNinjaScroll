import React from "react"
import styled from "styled-components"

const Header = props => {
  const { children, className } = props
  return (
    <StyledHeader className={className}>
      <StyledHeaderContainer>{children}</StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.div`
  && {
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 200;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    min-height: 56px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0.1rem 0.1rem 0;
    font-size: 2.4rem;
    font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", serif;
    letter-spacing: 0.8rem;
  }
`

const StyledHeaderContainer = styled.div`
  && {
    width: 100%;
    max-width: 76rem;
    margin: 0 auto;
  }
`
