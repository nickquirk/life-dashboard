import NavbarComponent from './navbar'

function Layout({ children }) {
  return (
    <>
    <NavbarComponent />
      <main>{children}</main>
    </>
  )
}

export default Layout