import { useEffect, useState } from "react"

import "./DragAndDrop.css"

import Stack from "./Stack"

import data from "../data/tasks.json"

export interface ITask {
  id: string
  title: string
  status: string
  done: boolean
}

// INIT
export const KEY = "drag-and-drop-tasks"
const RELOAD = false

function initTasks() {
  if (RELOAD) {
    localStorage.removeItem(KEY)
    return data.data
  }
  const dataString = localStorage.getItem(KEY)
  if (dataString) return JSON.parse(dataString)

  return []
}

function DragAndDrop() {
  const [tasks, setTasks] = useState<ITask[]>(initTasks())
  const [activeCard, setActiveCard] = useState<ITask | null>(null)

  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem(KEY, JSON.stringify(tasks))
    } else {
      localStorage.removeItem(KEY)
    }
  }, [tasks])

  const handleDelete = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  const handleCheck = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  const onDrop = (status: string, position: number) => {
    if (!activeCard) {
      return
    }

    const filteredTasks = tasks.filter((task) => task.id !== activeCard.id)

    const updatedTasks = [
      ...filteredTasks.slice(0, position),
      {
        ...activeCard,
        status: status,
      },
      ...filteredTasks.slice(position),
    ]

    setTasks(updatedTasks)
    setActiveCard(null)
  }

  return (
    <div className="DragAndDrop">
      <Stack
        status="To Do"
        tasks={tasks}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        onDrop={onDrop}
        setActiveCard={setActiveCard}
      />
      <Stack
        status="In Progress"
        tasks={tasks}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        onDrop={onDrop}
        setActiveCard={setActiveCard}
      />
      <Stack
        status="Done"
        tasks={tasks}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        onDrop={onDrop}
        setActiveCard={setActiveCard}
      />
    </div>
  )
}

export default DragAndDrop
