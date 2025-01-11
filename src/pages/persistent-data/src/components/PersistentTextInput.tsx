import useSessionStorage from "../hooks/useSessionStorage"

function PersistentTextInput({
  name,
  initialValue,
}: {
  name: string
  initialValue: string
}) {
  const { value, setValue } = useSessionStorage(name, initialValue)

  return (
    <input
      className={name}
      name={name}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default PersistentTextInput
