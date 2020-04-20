import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { GlobalStyle, StyledBorderHeader, StyledBorderFooter } from "../styles"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <>
        <GlobalStyle />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />

          <StyledArticle>
            <StyledBorderHeader>
              <StyledArticleHeader>
                {post.frontmatter.title}
              </StyledArticleHeader>
              <StyledArticleDate>{post.frontmatter.date}</StyledArticleDate>
            </StyledBorderHeader>
            <StyledBlogSection
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <StyledBorderFooter />
          </StyledArticle>

          <StyledNav>
            <StyledNavContainer>
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </StyledNavContainer>
          </StyledNav>
        </Layout>
      </>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

const StyledArticle = styled.article`
  && {
    margin: 2rem auto;
    width: 100%;
    max-width: 76rem;
    padding: 3rem;
    background-color: #ffffff;
    box-shadow: 0 0.1rem 0.1rem rgba(10, 10, 10, 0.1),
      0 0.1rem 0.2rem rgba(10, 10, 10, 0.1), 0 0 0.1rem rgba(10, 10, 10, 0.8);
    border-radius: 0.3rem;
  }
`

const StyledArticleHeader = styled.h1`
  && {
    font-size: 2.8rem;
  }
`
const StyledArticleDate = styled.p`
  && {
    margin-top: 0.5rem;
    color: #717171;
  }
`
const StyledBlogSection = styled.section`
  && {
    margin-top: 3rem;
    * {
    }
    h2 {
      font-size: 2.4rem;
      :not(:first-child) {
        margin-top: 2rem;
      }
    }
    h3 {
    }
    h4 {
    }
    p {
      font-size: 1.8rem;
      :not(p + p) {
        margin-top: 1rem;
      }
    }
    li {
      font-size: 1.6rem;
    }
    .gatsby-highlight {
      font-size: 1.4rem;
    }
  }
`

const StyledNav = styled.nav`
  && {
  }
`

const StyledNavContainer = styled.ul`
  && {
    width: 100%;
    max-width: 76rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem;
  }
`
