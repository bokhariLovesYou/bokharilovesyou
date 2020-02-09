import React, { Component } from "react"
import SEO from "../components/seo"
import PostWrapperLayout from "../components/PostWrapperLayout"
import { graphql } from "gatsby"
import styled from "styled-components"
const Article = styled.article``
const TitleWrapper = styled.header`
  padding: 0.5rem 0 2rem 0;
`
const Date = styled.span`
  color: #dd4a68;
  font-size: 0.9rem;
`

const ArticleContent = styled.div`
  line-height: 1.7;
  color: #37352f;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.5rem;
    margin-bottom: 1.65rem;
  }
  a {
    color: #dd4a68;
    font-weight: 700;
  }
  ul,
  ol {
    li {
      margin-bottom: 0.5rem;
    }
  }
  img {
    margin-top: 1.25rem;
    margin-bottom: 2.5rem;
    border-radius: 12px;
    width: 100%;
  }
  blockquote {
    background-color: #f7f6f3;
    border-radius: 0.3em;
    margin: 2em 0;
    padding: 2em 1.25em;
    overflow: auto;
    font-size: 0.9rem;
    color: #dd4a68;
    font-weight: 500;
    border-left: 4px solid #dd4a68;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    p,
    ul li,
    ol li {
      margin-bottom: 0;
    }
  }
`

export class SinglePost extends Component {
  render() {
    const { data } = this.props
    const post = data.markdownRemark.frontmatter
    return (
      <PostWrapperLayout imageSource={post.image.childImageSharp.fluid}>
        <SEO title={post.metaTitle} />
        <Article>
          <TitleWrapper>
            <h1>{post.title}</h1>
            <Date>{post.date}</Date>
          </TitleWrapper>
          <ArticleContent
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </Article>
      </PostWrapperLayout>
    )
  }
}

export default SinglePost

export const SinglePostQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        metaTitle
        metaDescription
        image {
          childImageSharp {
            fluid(maxWidth: 1600, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`