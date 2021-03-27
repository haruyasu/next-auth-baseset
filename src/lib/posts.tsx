// import fetch from 'node-fetch'

// const SERVERURL = 'http://127.0.0.1:8000/'

export interface AllPostsDataResponse {
  content: string
  created_at: string
  id: number
  title: string
}

export async function getAllPostsData(): Promise<AllPostsDataResponse[]> {
  // const res = await fetch(new URL(`${SERVERURL}api/list-post/`))
  // const posts = await res.json()

  const posts = [
    {
      id: 1,
      title: 'テスト1',
      content: 'テスト1',
      created_at: '2020-12-29 21:35:06'
    },
    {
      id: 2,
      title: 'テスト2',
      content: 'テスト2',
      created_at: '2021-01-30 20:58:15'
    }
  ]

  return posts
}

export interface AllPostIdsResponse {
  params: {
    id: string
  }
}

export async function getAllPostIds(): Promise<AllPostIdsResponse[]> {
  // const res = await fetch(new URL(`${SERVERURL}api/list-post/`))
  // const posts = await res.json()

  const posts = [
    {
      id: 1,
      title: 'テスト1',
      content: 'テスト1',
      created_at: '2020-12-29 21:35:06'
    },
    {
      id: 2,
      title: 'テスト2',
      content: 'テスト2',
      created_at: '2021-01-30 20:58:15'
    }
  ]

  return posts.map((post: any) => {
    return {
      params: {
        id: String(post.id)
      }
    }
  })
}

export interface PostDataResponse {
  content: string
  created_at: string
  id: number
  title: string
}

export async function getPostData(id: number): Promise<PostDataResponse> {
  // const res = await fetch(new URL(`${SERVERURL}api/detail-post/${id}/`))
  // const post = await res.json()

  const post = {
    id: 1,
    title: 'テスト1',
    content: 'テスト1',
    created_at: '2020-12-29 21:35:06'
  }

  return post
}
