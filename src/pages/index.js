import React from "react"
import SEO from "../components/seo"
import ListLoop from "../components/ListLoop"
import ListItemElement from "../components/ListItemElement"
import PageWrapperLayout from "../components/PageWrapperLayout"
import styled from "styled-components"
import { graphql } from "gatsby"
const PagesWrapper = styled.div`
  color: rgba(55, 53, 47, 0.6);
  .emoji {
    color: #000;
  }
`
const ArticleLoopWrapper = styled.div`
  max-width: 602px;
  margin-left: 0;
  margin-right: auto;
  margin-top: 2.5rem;
`

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    console.log(data)
    let blogPosts = []
    data.allMarkdownRemark.edges.forEach(({ node, index }) => {
      blogPosts.push({
        title: node.frontmatter.title,
        destination: "/" + node.fields.slug,
      })
    })
    return (
      <PageWrapperLayout imageSource={data.file.childImageSharp.fluid}>
        <SEO title="Home" />
        <PagesWrapper className="pages--wrapper">
          <h1>
            Hi There!{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p>My name is Paras, and this is my blog!</p>
          <p>
            I use this space to write about life, and more. Feel free to look
            around! And thank you for staying by{" "}
            <span className="emoji" role="img" aria-label="wave">
              🙏
            </span>
          </p>
          <ArticleLoopWrapper>
            <h2 className="h4">Articles</h2>
            <hr />
            <ListLoop>
              {blogPosts.map((elem, index) => (
                <ListItemElement
                  title={elem.title}
                  destination={elem.destination}
                  key={index}
                  handle={this.scrollTop}
                />
              ))}
            </ListLoop>
          </ArticleLoopWrapper>
        </PagesWrapper>
      </PageWrapperLayout>
    )
  }
}

export default IndexPage

export const HomepageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "MM Do YYYY")
          }
        }
      }
    }
    file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
