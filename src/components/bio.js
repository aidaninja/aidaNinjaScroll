/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <StyledBio>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <StyledBioText>
        會田忍法帖は <strong>{author}</strong> が書いています。
        <br />
        <a href={`https://twitter.com/${social.twitter}`}>担々麺食べてます。</a>
      </StyledBioText>
    </StyledBio>
  )
}

export default Bio

const StyledBio = styled.div`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
`
const StyledBioText = styled.p`
  && {
    margin-top: 1rem;
    text-align: center;
  }
`
