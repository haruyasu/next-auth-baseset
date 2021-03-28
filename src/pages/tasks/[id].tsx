import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { useEffect } from 'react'
import useSWR from 'swr'

import { getAllTaskIds, getTaskData } from '../../lib/tasks'

interface TasksData {
  created_at: string
  id: number
  title: string
}

const fetcher = async (url: string): Promise<TasksData> => {
  const res = await fetch(url).then(async (res) => await res.json())
  return res
}

const SERVERURL = 'http://127.0.0.1:8000/'

interface Props {
  id: number
  staticTask: TasksData
}

const Post: NextPage<Props> = ({ id, staticTask }) => {
  const router = useRouter()
  const { data: task, mutate } = useSWR(
    `${SERVERURL}api/detail-task/${id}`,
    fetcher,
    {
      initialData: staticTask
    }
  )

  useEffect(() => {
    // eslint-disable-next-line no-void
    void mutate()
  }, [])

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (router.isFallback || !task) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <span className="mb-4">
        {'ID : '}
        {task.id}
      </span>
      <p className="mb-4 text-xl font-bold">{task.title}</p>
      <p className="mb-12">{task.created_at}</p>
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllTaskIds()

  return {
    paths,
    fallback: true
  }
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params
  const staticTask = await getTaskData(params.id)

  return {
    props: {
      id: staticTask.id,
      staticTask
    },
    revalidate: 3
  }
}
