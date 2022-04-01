import React from "react"
import styled from "styled-components"
import big from "../assets/images/big.jpg"

const Images = () => {
  return (
    <Wrapper>
      <h2>Gatsby Image</h2>
      <img src={big} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

export default Images
