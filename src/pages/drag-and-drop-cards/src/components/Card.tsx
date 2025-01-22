import { ITask } from "./DragAndDrop"

function Card({
  task,
  handleDelete,
  handleCheck,
  setActiveCard,
}: {
  task: ITask
  handleDelete: () => void
  handleCheck: () => void
  setActiveCard: () => void
}) {
  return (
    <div className="Card" draggable
      onDragStart={setActiveCard}
    >
      <input type="checkbox" checked={task.done} onChange={handleCheck} />
      <p>{task.title}</p>
      <button onClick={handleDelete}>🗑</button>
    </div>
  )
}

export default Card
