import { ReactElement } from 'react'

import Navigation from './navigation'

export default function Layout(props: any): ReactElement {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="container flex flex-1 justify-center mx-auto px-5 max-w-screen-xl">
        {props.children}
      </main>
      <footer className="flex items-center justify-center w-full h-20 text-white text-sm bg-gray-700">
        © 2021 Footer
      </footer>
    </div>
  )
}
