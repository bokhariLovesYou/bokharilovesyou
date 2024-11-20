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
        <SEO
          title="Portfolio"
          description="This is what I do 9 to 5 (or 10 to 6)"
        />
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
            <div className="row">
              <div className="col-lg-6">
                <ListLoop>
                  <a
                    href="https://www.taylor.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Taylor" />
                  </a>
                <a
                    href="https://urbanbellemag.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Urbanbelle Magazine" />
                  </a>
                <a
                    href="https://www.thecastlegrp.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="The Castle Group" />
                  </a>
                  <a
                    href="https://theshaderoom.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="The Shade Room" />
                  </a>
                  <a
                    href="https://www.lolavalentina.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Lola Valentina" />
                  </a>
                  <a
                    href="https://www.pravadaprivatelabel.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Pravada Private Label" />
                  </a>
                  <a
                    href="https://www.weve.co/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Weve" />
                  </a>
                  <a
                    href="https://www.burnhamnationwide.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Burnham Nationwide" />
                  </a>
                  <a
                    href="https://www.urbanbound.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Urbanbound" />
                  </a>
                  <a
                    href="https://www.vcinjurylaw.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Vasilatos Law" />
                  </a>
                  <a
                    href="https://www.360copack.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="360 Co Pack" />
                  </a>
                  <a
                    href="https://epaysystems.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="EPAY Systems" />
                  </a>
                  <a
                    href="https://alliance-exposition.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Alliance Exposition" />
                  </a>
                  {/* <a
                    href="https://thesmallbudget.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="The Small Budget" />
                  </a> */}
                  <a
                    href="https://go.flexshares.com/learn-esg"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Flexshares | ESG Content Hub" />
                  </a>
                  {/* <a
                    href="https://ghostproductions.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Ghost Productions" />
                  </a> */}
                  
                  <a
                    href="https://www.oneims.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="OneIMS Inc." />
                  </a>
                  {/* <a
                    href="https://www.singleclosing.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Single Closing" />
                  </a> */}
                  <a
                    href="https://rfxcel.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Rfxcel" />
                  </a>
                  {/* <a
                    href="http://learn.campus.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Learn With Campus" />
                  </a> */}
                  <a
                    href="https://apacks.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Apacks" />
                  </a>
                  <a
                    href="https://buttarbokharitas.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="BBT Law" />
                  </a>
                  {/* <a
                    href="https://gildasuites.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Gilda Suites" />
                  </a> */}
                  {/* <a
                    href="https://mossami.netlify.app/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Mossami" />
                  </a> */}
                  <a
                    href="https://www.amper.xyz/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Amper" />
                  </a>
                  <a
                    href="https://www.bedbuginjuries.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Bed Bug Injuries" />
                  </a>
                  <a
                    href="https://bedbuglawyer.org/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Bed Bug Lawyer" />
                  </a>
                  <a
                    href="https://the1888hotel.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="The 1888 Hotel" />
                  </a>
                  <a
                    href="https://flowintoyogallc.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Flow Into Yoga LLC" />
                  </a>
                  <a
                    href="https://fox-pen.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Fox Pen" />
                  </a>
                  <a
                    href="https://mosibello.vercel.app/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Mosibello" />
                  </a>
                  <a
                    href="https://tmsnm.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="TMSNM" />
                  </a>
                  <a
                    href="https://miraburst.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="MiraBurst" />
                  </a>
                </ListLoop>
              </div>
              <div className="col-lg-6 mt-3 pt-3 mt-lg-0 pt-lg-0">
                <h3 class="h6 mb-3 pt-lg-2">HubSpot Marketplace Themes</h3>
                <ListLoop>
                  <a
                    href="https://ecosystem.hubspot.com/marketplace/website/counselor-theme-by-oneims-com"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Counselor" />
                  </a>  
                  <a
                    href="https://ecosystem.hubspot.com/marketplace/website/consultant-theme-by-oneims-com"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Consultant" />
                  </a>
                  <a
                    href="https://ecosystem.hubspot.com/marketplace/website/legal-law-theme-by-oneims-com"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Law" />
                  </a>
                  <a
                    href="https://ecosystem.hubspot.com/marketplace/website/fintech-theme-by-oneims"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Fintech" />
                  </a>
                  <a
                    href="https://ecosystem.hubspot.com/marketplace/website/healthcare-theme-by-oneims-com"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Healthcare" />
                  </a>
                  <a
                    href="https://ecosystem.hubspot.com/marketplace/website/tech-solutions-theme-by-oneims"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Tech" />
                  </a>
                  <a
                    href="https://ecosystem.hubspot.com/marketplace/website/logistics-theme-by-oneims-com"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Logistics" />
                  </a>
                  <a
                    href="https://ecosystem.hubspot.com/marketplace/website/nonprofit-theme-by-oneims"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Nonprofit" />
                  </a>
                  <a
                    href="https://ecosystem.hubspot.com/marketplace/website/business-saas-theme-by-oneims"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Business" />
                  </a>
                  <a
                    href="https://ecosystem.hubspot.com/marketplace/website/consultancy-theme-by-oneims"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Consultancy" />
                  </a>
                  <a
                    href="https://ecosystem.hubspot.com/marketplace/website/creative-services-theme-by-oneims"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Creative Services" />
                  </a>
                  <a
                    href="https://ecosystem.hubspot.com/marketplace/website/circles-theme-by-oneims"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemElement externalLink title="Circles" />
                  </a>
                </ListLoop>
              </div>
            </div>
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
