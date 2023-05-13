import React from 'react'

import NavbarComponent from './navbar'
import { Container } from 'react-bootstrap'



function Layout({ children }) {
  return (
    <>
      <NavbarComponent />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout