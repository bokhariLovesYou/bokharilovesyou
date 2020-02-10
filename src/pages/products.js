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

class Products extends React.Component {
  render() {
    const { data } = this.props
    return (
      <PageWrapperLayout imageSource={data.file.childImageSharp.fluid}>
        <SEO title="Home" />
        <PagesWrapper className="pages--wrapper">
          <h1>
            Celebrate{" "}
            <span role="img" aria-label="celebrate">
              🥳
            </span>
          </h1>
          <p>
            It's a feeling of satisfaction when we create something. Something
            which we own. Something which we gave birth to.
          </p>
          <p>
            It's incredible.{" "}
            <span className="emoji" role="img" aria-label="dance">
              💃🏻
            </span>
          </p>
          <ArticleLoopWrapper>
            <h2 className="h4">Products</h2>
            <hr />
            <ListLoop>
              <a href="https://secretswithbruno.com/" target="_blank">
                <ListItemElement externalLink title="Secrets With Bruno" />
              </a>
              <ListItemElement title="Bokharilovesyou" destination="/" />
              <a
                href="https://dreamy-agnesi-0d7576.netlify.com/"
                target="_blank"
              >
                <ListItemElement
                  externalLink
                  title="Work With Bruno (In Progress)"
                />
              </a>
              <a href="https://designwithbruno.com/" target="_blank">
                <ListItemElement externalLink title="Design With Bruno" />
              </a>
            </ListLoop>
          </ArticleLoopWrapper>
        </PagesWrapper>
      </PageWrapperLayout>
    )
  }
}

export default Products

export const productsQuery = graphql`
  query {
    file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
