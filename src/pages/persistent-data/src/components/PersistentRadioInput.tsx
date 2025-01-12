import useSessionStorage from "../hooks/useSessionStorage"

function PersistentRadioInput({
  name,
  initialValue,
  options,
  required = false,
}: {
  name: string
  initialValue: string
  options: string[]
  required?: boolean
}) {
  const { value, setValue } = useSessionStorage(name, initialValue)

  return (
    <ul className={name}>
      {options.map((option) => (
        <li key={option}>
          <input
            type="radio"
            required={required}
            id={option}
            name={name}
            value={option}
            checked={value === option}
            onChange={() => setValue(option)}
          />
          <label htmlFor={option}>{option}</label>
        </li>
      ))}
    </ul>
  )
}

export default PersistentRadioInput
