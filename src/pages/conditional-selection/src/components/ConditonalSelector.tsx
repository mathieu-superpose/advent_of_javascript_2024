import { useEffect, useState } from "react"

import "./ConditionalSelector.css"

function ConditionalSelector({
  data,
}: {
  data: { id: number; name: string }[]
}) {
  const [gender, setGender] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [option, setOption] = useState("")

  const formatOption = (option: string) => {
    return option.charAt(0).toUpperCase() + option.slice(1).replace("-", " ")
  }

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value)
    setCategory("")
    setOption("")
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value
    setCategory(category)

    const hasOptions =
      data[gender]["categories"][category].hasOwnProperty("options")

    if (hasOptions) {
      setOption(Object.keys(data[gender]["categories"][category]["options"])[0])
    }
  }

  return (
    <div className="ConditionalSelector">
      <div className="selectWrapper">
        <select onChange={(e) => handleGenderChange(e)}>
          <option key="select-one" value="">
            Select One
          </option>
          {Object.keys(data).map((key) => (
            <option key={key} value={key}>
              {formatOption(key)}
            </option>
          ))}
        </select>
      </div>

      {gender ? (
        <div className="selectWrapper">
          <select onChange={(e) => handleCategoryChange(e)}>
            <option key="select-one" value="">
              Select One
            </option>
            {Object.keys(data[gender]["categories"]).map((key) => (
              <option key={key} value={key}>
                {formatOption(key)}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {option ? (
        <div className="selectWrapper">
          <select>
            {Object.keys(data[gender]["categories"][category]["options"]).map(
              (key) => (
                <option key={key} value={key}>
                  {formatOption(key)}
                </option>
              )
            )}
          </select>
        </div>
      ) : null}
    </div>
  )
}

export default ConditionalSelector
