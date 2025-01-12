import useSessionStorage from "../hooks/useSessionStorage"

function PersistentCheckbox({
  name,
  initialValue,
  group = name,
}: {
  name: string
  initialValue: string
  group?: string
}) {
  const { value, setValue } = useSessionStorage(name, initialValue)

  return (
    <input
      className={name}
      type="checkbox"
      id={name}
      value={name}
      name={group}
      checked={!!value}
      onChange={(e) => setValue(e.target.checked ? name : "")}
    />
  )
}

export default PersistentCheckbox
