import React, { Component } from "react"
import styled from "styled-components"

const ListWrap = styled.div``

export class ListLoop extends Component {
  render() {
    const { children } = this.props
    return <ListWrap>{children}</ListWrap>
  }
}

export default ListLoop
