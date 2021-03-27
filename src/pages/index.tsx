import Head from 'next/head'
import { ReactElement } from 'react'

import Hero from '../components/home/hero'
import Post from '../components/post/post'
import { getAllPostsData } from '../lib/posts'

export default function Home({ posts }: any): ReactElement {
  return (
    <div>
      <Head>
        <title>Title</title>
        <meta name="description" content="description" />
      </Head>
      <Hero />
      <div className="flex flex-wrap -m-4 mb-5">
        {posts?.map((post: any) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

interface StaticPropsResponse {
  props: any
  revalidate: number
}

export async function getStaticProps(): Promise<StaticPropsResponse> {
  const posts = await getAllPostsData()

  return {
    props: { posts },
    revalidate: 3
  }
}
