import Nav from './Nav'

// const Layout = (props) => {
//   return (
//     <>
//       <Nav />
//       {props.children}
//     </>
//   )
// }

const Layout = ({children}) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default Layout;