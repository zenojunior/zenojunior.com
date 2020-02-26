import React from "react"
import styled from "styled-components"

const MaterialIcon = styled.span`
  font-family: 'Material Icons';
  font-size: 24px;
  margin-right: 10px;
`

const Icon = ({ name, style }) => (
  <MaterialIcon style={style}>{ name }</MaterialIcon>
)

export default  Icon
