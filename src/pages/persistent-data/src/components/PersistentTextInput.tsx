import useSessionStorage from "../hooks/useSessionStorage"

function PersistentTextInput({
  name,
  initialValue,
  required = false,
}: {
  name: string
  initialValue: string
  required?: boolean
}) {
  const { value, setValue } = useSessionStorage(name, initialValue)

  return (
    <input
      className={name}
      name={name}
      type="text"
      required={required}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default PersistentTextInput
