import useSessionStorage from "../hooks/useSessionStorage"

function PersistentEmailInput({
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
      type="email"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default PersistentEmailInput
