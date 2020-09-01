import Link from 'next/link';

function Nav() {
  return (
    <div>
      <img src="./static/logo.png" alt="logo" height="50" />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>

      {/* scope style */}
      <style jsx>
        {`
          a, img {
            padding: 10px;
          }
        `}
      </style>
    </div>
  );
}

export default Nav;