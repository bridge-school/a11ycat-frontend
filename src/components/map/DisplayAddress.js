import React from "react";
import Styled from 'styled-components'

const Address = Styled.p`
  color: #333;
`

export const DisplayAddress = ({ addressText, address }) => (
  <div>
    <Address>
      {addressText}: {address}
    </Address>
  </div>
)
