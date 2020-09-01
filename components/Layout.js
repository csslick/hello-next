import Nav from './Nav'

// const Layout = (props) => {
//   return (
//     <>
//       <Nav />
//       {props.children}
//     </>
//   )
// }

const Layout = ({title, footer, children}) => {
  return (
    <>
      <Nav />
      <h1>{title}</h1>
      <hr/>
      {children}
      <hr/>
      <h1>footer {footer}</h1>
    </>
  )
}

export default Layout;