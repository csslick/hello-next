import Link from "next/link";

const myStyle = {
  color: 'red',
  border: '1px solid black',
  padding: '10px'
}

const Index = () => {
  return (
    <>
      <h2>Hello Next JS</h2>
      <Link href="./about">
        <a style={ myStyle }>About</a>
      </Link>
      
    </>
  )
}

export default Index;