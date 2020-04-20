import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Header from "./Header"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={`/`}>{title}</Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={`/`}>{title}</Link>
        </h3>
      )
    }
    return (
      <div>
        <StyledHeaderWrapper>
          <Header>{header}</Header>
        </StyledHeaderWrapper>
        <main>{children}</main>
        <StyledCreditFooter>
          <p>© {new Date().getFullYear()}, 會田忍法帖 All rights reserved.</p>
          <p>
            Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </StyledCreditFooter>
      </div>
    )
  }
}

export default Layout

const StyledHeaderWrapper = styled.header`
  && {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9999;
  }
`
const StyledCreditFooter = styled.footer`
  && {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    padding: 1rem 0;
    p {
      margin: 0;
    }
  }
`
