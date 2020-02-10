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

class Portfolio extends React.Component {
  render() {
    const { data } = this.props
    return (
      <PageWrapperLayout imageSource={data.file.childImageSharp.fluid}>
        <SEO title="Home" />
        <PagesWrapper className="pages--wrapper">
          <h1>
            Joy{" "}
            <span role="img" aria-label="celebrate">
              💅
            </span>
          </h1>
          <p>
            This is what I've been doing 9-5 (or 10 to 6, whatever). The list
            consists of the items I've created within the current organization I
            work at.
          </p>
          <p>
            Some are good, some could be better - but we learn by doing.{" "}
            <span className="emoji" role="img" aria-label="dance">
              👀
            </span>
          </p>
          <ArticleLoopWrapper>
            <h2 className="h4">Portfolio</h2>
            <hr />
            <ListLoop>
              <a
                href="http://www-burnhamnationwide-com.sandbox.hs-sites.com/"
                rel="nofollow"
                target="_blank"
              >
                <ListItemElement externalLink title="Burnham Nationwide" />
              </a>
              <a
                href="https://www.singleclosing.com/"
                rel="nofollow"
                target="_blank"
              >
                <ListItemElement externalLink title="Single Closing" />
              </a>
              <a href="https://mosibello.com/" rel="nofollow" target="_blank">
                <ListItemElement externalLink title="Mosibello" />
              </a>
              <a
                href="https://www.urbanbound.com/"
                rel="nofollow"
                target="_blank"
              >
                <ListItemElement externalLink title="Urbanbound" />
              </a>
              <a
                href="https://bedbuginjuries.com/"
                rel="nofollow"
                target="_blank"
              >
                <ListItemElement externalLink title="Bed Bug Injuries" />
              </a>
              <a href="https://epaysystems.com/" rel="nofollow" target="_blank">
                <ListItemElement externalLink title="EPAY Systems" />
              </a>
              <a href="https://tmsnm.com/" rel="nofollow" target="_blank">
                <ListItemElement externalLink title="TMSNM" />
              </a>
            </ListLoop>
          </ArticleLoopWrapper>
        </PagesWrapper>
      </PageWrapperLayout>
    )
  }
}

export default Portfolio

export const portfolioQuery = graphql`
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
