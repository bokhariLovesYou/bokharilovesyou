import React, { Component } from "react"
import styled from "styled-components"

const FrameWrapperContentHolder = styled.div``

export class FrameWrapper extends Component {
  componentDidMount() {
    console.log("hi!")
  }
  render() {
    const { children } = this.props
    return <FrameWrapperContentHolder>{children}</FrameWrapperContentHolder>
  }
}

export default FrameWrapper
