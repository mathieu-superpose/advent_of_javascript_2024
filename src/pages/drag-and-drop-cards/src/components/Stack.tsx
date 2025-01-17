import { Fragment } from "react/jsx-runtime"

import { ITask } from "./DragAndDrop"

import Card from "./Card"
import DropArea from "./DropArea"

function Stack({
  status,
  tasks,
  handleDelete,
  handleCheck,
  onDrop,
  setActiveCard,
}: {
  status: string
  tasks: ITask[] | null
  handleDelete: (taskId: string) => void
  handleCheck: (taskId: string) => void
  onDrop: (status: string, position: number) => void
  setActiveCard: (task: ITask) => void
}) {
  return (
    <div className="Stack" onDragOver={(e) => e.preventDefault()}>
      <h2>{status}</h2>
      {tasks?.map((task, index) =>
        task.status === status ? (
          <Fragment key={index}>
            <DropArea onDrop={() => onDrop(status, index - 1)} />
            <Card
              key={index}
              task={task}
              handleDelete={() => handleDelete(task.id)}
              handleCheck={() => handleCheck(task.id)}
              setActiveCard={() => setActiveCard(task)}
            />
          </Fragment>
        ) : null
      )}
      <DropArea onDrop={() => onDrop(status, tasks?.length || 0)} last={true} />
    </div>
  )
}

export default Stack
