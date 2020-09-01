import Link from 'next/link';

function Nav() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
  );
}

export default Nav;