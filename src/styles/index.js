import React from "react"
import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 *{
   padding: 0;
   margin: 0;
   box-sizing: border-box;
 }
  body {
    color: #fff;
    background: #21232D;
    border: 5px solid #000;
  }
  a {
    color: #fff;
  }
`

export const StyledBlogSection = styled.section`
  && {
    h2 {
      font-weight: 700;
    }
    p {
      line-height: 1.9;
    }
  }
`
export const StyledBlogArticle = styled.article`
  && {
    a {
      color: #eee;
    }
    h3 {
      font-weight: 700;
    }
  }
`

export const StyledBorderHeader = styled.header`
  && {
    border-bottom: solid #e7e7e7 1px;
  }
`
export const StyledBorderFooter = styled.footer`
  && {
    padding-top: 20px;
    border-top: solid #e7e7e7 1px;
  }
`

export const StyledCreditFooter = styled.footer`
  && {
    font-size: 10px;
    text-align: center;
    p {
      margin: 0;
    }
  }
`

export const StyledHeading = styled.h3`
  && {
    font-weight: 700;
  }
`
