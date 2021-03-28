import fetch from 'node-fetch'

const SERVERURL = 'http://127.0.0.1:8000/'

export async function getAllTasksData() {
  const res = await fetch(new URL(`${SERVERURL}api/list-task/`))
  const tasks = await res.json()
  // const staticfilterdTasks = tasks.sort(
  //   (a, b) => new Date(b.created_at) - new Date(a.created_at)
  // )
  return tasks
}

export async function getAllTaskIds() {
  const res = await fetch(new URL(`${SERVERURL}api/list-task/`))
  const tasks = await res.json()

  return tasks.map((task) => {
    return {
      params: {
        id: String(task.id)
      }
    }
  })
}
export async function getTaskData(id) {
  const res = await fetch(new URL(`${SERVERURL}api/detail-task/${id}/`))
  const task = await res.json()
  // return {
  //   task,
  // };
  return task
}
