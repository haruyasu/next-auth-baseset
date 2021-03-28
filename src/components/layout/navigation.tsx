import { NextPage } from 'next'
import Link from 'next/link'

const Navigation: NextPage = () => {
  return (
    <header className="container flex flex-row items-center mx-auto px-5 py-5 max-w-screen-xl">
      <Link href="/">
        <a>
          <img
            src="https://placehold.jp/80x80.png"
            alt="me"
            width={80}
            height={80}
          />
        </a>
      </Link>
      <nav className="ml-auto">
        <Link href="/about">
          <a className="mr-5">About</a>
        </Link>
      </nav>
    </header>
  )
}

export default Navigation
