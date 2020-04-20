import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
 ${reset}
 *{
   padding: 0;
   margin: 0;
   box-sizing: border-box;

 }
 html{
   font-size: 62.5%;
   overflow-y: scroll;
 }
 body {
    color: #282828;
    background-color: #F9FAFA;
    font-family: 'Monaco', '游ゴシック体', 'YuGothic', sans-serif;
    line-height: 1.4;
  }
  a {
    color: #282828;
    text-decoration: none;
  }
`

export const StyledBorderHeader = styled.header`
  && {
    /* border-bottom: solid #e7e7e7 0.1rem; */
  }
`
export const StyledBorderFooter = styled.footer`
  && {
    padding-top: 2rem;
    /* border-top: solid #e7e7e7 0.1rem; */
  }
`
