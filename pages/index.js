import Link from "next/link";
import Nav from '../components/Nav';

const myStyle = {
  color: 'red',
  border: '1px solid black',
  padding: '10px'
}
const Index = () => {
  return (
    <>
      <h1>Hello Next JS</h1>
      <Nav />

      <style jsx>
        {`
          h1 { color: red;}
          p { color: green;}
        `}
      </style>
    </>
  )
}

export default Index;