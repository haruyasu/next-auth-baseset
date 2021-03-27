import { useRouter } from 'next/router'
import { ReactElement } from 'react'

import { getAllPostIds, getPostData } from '../../lib/posts'

interface PostProps {
  post: {
    content: string
    created_at: string
    id: number
    title: string
  }
}

export default function PostData({ post }: PostProps): ReactElement {
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (router.isFallback || !post) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h2>詳細</h2>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p>{post.created_at}</p>
    </div>
  )
}

interface StaticPathsResponse {
  fallback: boolean
  paths: any
}

export async function getStaticPaths(): Promise<StaticPathsResponse> {
  const paths = await getAllPostIds()

  return {
    paths,
    fallback: true
  }
}

interface GetPostProps {
  params: {
    id: number
  }
}

interface StaticPropsResponse {
  props: any
  revalidate: number
}

export async function getStaticProps({
  params
}: GetPostProps): Promise<StaticPropsResponse> {
  const post = await getPostData(params.id)

  return {
    props: {
      post
    },
    revalidate: 3
  }
}
