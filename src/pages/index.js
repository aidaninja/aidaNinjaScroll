import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { GlobalStyle } from "../styles"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <>
        <GlobalStyle />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="All posts" />
          <StyledContentWrapper>
            {posts.map(({ node }, i) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <StyledBlogArticle to={node.fields.slug}>
                  <StyledBlogArticleContainer key={node.fields.slug}>
                    <StyledBlogArticleHeader>
                      <StyledBlogArticleHeading>
                        {`${posts.length - i}. ${title}`}
                      </StyledBlogArticleHeading>
                      <StyledBlogArticleDate>
                        {node.frontmatter.date}
                      </StyledBlogArticleDate>
                    </StyledBlogArticleHeader>
                    <StyledBlogArticleSection>
                      <StyledBlogAricleDescription
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </StyledBlogArticleSection>
                  </StyledBlogArticleContainer>
                </StyledBlogArticle>
              )
            })}
            <Bio />
          </StyledContentWrapper>
        </Layout>
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

const StyledContentWrapper = styled.div`
  && {
    margin: 0 auto;
    width: 100%;
    max-width: 76rem;
    padding: 2rem 0;
  }
`

const StyledBlogArticle = styled(Link)`
  && {
    display: block;
    width: 100%;
    max-width: 620px;
    margin: 0 auto;
    padding: 1.6rem;
    background-color: #ffffff;
    box-shadow: 0 0.1rem 0.1rem rgba(10, 10, 10, 0.1),
      0 0.1rem 0.2rem rgba(10, 10, 10, 0.1), 0 0 0.1rem rgba(10, 10, 10, 0.8);
    border-radius: 0.3rem;
    :not(:first-child) {
      margin-top: 1rem;
    }
  }
`

const StyledBlogArticleContainer = styled.article`
  && {
  }
`
const StyledBlogArticleHeader = styled.header`
  && {
  }
`
const StyledBlogArticleHeading = styled.h3`
  && {
    font-size: 2.1rem;
  }
`

const StyledBlogArticleDate = styled.small`
  && {
    display: block;
    margin-top: 0.4rem;
    color: #717171;
  }
`
const StyledBlogArticleSection = styled.section`
  && {
    margin-top: 0.4rem;
  }
`
const StyledBlogAricleDescription = styled.p`
  && {
    font-size: 1.5rem;
  }
`
