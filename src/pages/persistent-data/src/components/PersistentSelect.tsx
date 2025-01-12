import useSessionStorage from "../hooks/useSessionStorage"

import { slugifier } from "../../../../utils/stringFormater"

function PersistentSelect({
  name,
  initialValue,
  options,
}: {
  name: string
  initialValue: string
  options: string[]
}) {
  const { value, setValue } = useSessionStorage(name, initialValue)

  return (
    <select
      className={name}
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={slugifier(option)}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default PersistentSelect
