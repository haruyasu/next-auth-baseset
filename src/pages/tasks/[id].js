import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { getAllTaskIds, getTaskData } from '../../lib/tasks'

const fetcher = (url) => fetch(url).then((res) => res.json())

const SERVERURL = 'http://127.0.0.1:8000/'

export default function Post({ staticTask, id }) {
  const router = useRouter()
  const { data: task, mutate } = useSWR(
    `${SERVERURL}api/detail-task/${id}`,
    fetcher,
    {
      initialData: staticTask
    }
  )

  useEffect(() => {
    mutate()
  }, [])

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

export async function getStaticPaths() {
  const paths = await getAllTaskIds()

  return {
    paths,
    fallback: true
  }
}
export async function getStaticProps({ params }) {
  const staticTask = await getTaskData(params.id)

  return {
    props: {
      id: staticTask.id,
      staticTask
    },
    revalidate: 3
  }
}
