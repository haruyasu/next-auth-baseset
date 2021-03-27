import Link from 'next/link'
import { ReactElement } from 'react'

interface Props {
  post: {
    id: number
  }
}

export default function Post({ post }: Props): ReactElement {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="p-4 cursor-pointer sm:w-1/2 lg:w-1/4">post</div>
    </Link>
  )
}
