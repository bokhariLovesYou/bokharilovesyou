import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"

// Components
import Header from "./header"
import Footer from "./Footer"
import DrawerContents from "./DrawerContents"

const Main = styled.main`
  padding-top: 56px;
  @media (min-width: 992px) {
    display: flex;
    padding-top: 0;
  }
`
const FrameWrapper = styled.div`
  @media (min-width: 992px) {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
  }
`

class Layout extends React.Component {
  state = {
    navToggled: "inactive",
  }

  handleDrawerToggle = () => {
    if (this.state.navToggled === "inactive") {
      this.setState({
        navToggled: "active",
      })
    } else {
      this.setState({
        navToggled: "inactive",
      })
    }
  }

  closeDrawer = () => {
    this.setState({
      navToggled: "inactive",
    })
  }
  render() {
    const { children } = this.props
    return (
      <>
        <Main>
          <DrawerContents
            hamBurgerState={this.state.navToggled}
            closeDrawer={this.closeDrawer}
            handleDrawer={this.handleDrawerToggle}
          />
          <FrameWrapper id="frame-wrapper">
            <Header handle={this.handleDrawerToggle} />
            {children}
            <Footer />
          </FrameWrapper>
        </Main>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
