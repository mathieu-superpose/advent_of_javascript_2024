import { SetStateAction, useEffect, useRef, useState } from "react"

import "./GridGeneratorPage.css"

function GridGeneratorPage() {
  const gridRef = useRef<HTMLDivElement>(null)

  const [columns, setColumns] = useState(3)
  const [rows, setRows] = useState(3)
  const [columnGap, setColumnGap] = useState(0)
  const [rowGap, setRowGap] = useState(0)

  const [rowDHeight, setRowWidth] = useState([...Array(12)].map((_r) => "1fr"))
  const [colWidth, setColWidth] = useState([...Array(12)].map((_r) => "1fr"))

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setChange: { (value: SetStateAction<number>): void; (arg0: number): void },
    min = 1,
    max = 12
  ) => {
    const value = e.target.value
    if (/[^0-9]/.test(value)) {
      return
    }
    if (value.length === 0) {
      setChange(min)
      return
    }
    const num = parseInt(value)
    if (num < min || num > max) {
      return
    }

    setChange(num)
  }

  useEffect(() => {
    if (!gridRef?.current) {
      return
    }

    const gridTemplateColumns = `repeat(${columns}, 1fr)`
    gridRef.current.style.gridTemplateColumns = gridTemplateColumns

    const gridTemplateRows = Array(rows).fill("1fr").join(" ")
    gridRef.current.style.gridTemplateRows = gridTemplateRows

    gridRef.current.style.columnGap = `${columnGap}px`

    gridRef.current.style.rowGap = `${rowGap}px`
  }, [rows, columns, columnGap, rowGap])

  return (
    <div className="GridGeneratorPage">
      <div className="Sidebar">
        <h1>CSS Grid Generator</h1>
        <ul>
          <li>
            <label>Columns</label>
            <input
              type="number"
              min={1}
              max={12}
              defaultValue={columns}
              onChange={(e) => handleChange(e, setColumns)}
            />
          </li>
          <li>
            <label>Rows</label>
            <input
              type="number"
              min={1}
              max={12}
              defaultValue={rows}
              onChange={(e) => handleChange(e, setRows)}
            />
          </li>
          <li>
            <label>
              Column Gap <span>(in px)</span>
            </label>
            <input
              type="number"
              min={0}
              max={100}
              defaultValue={columnGap}
              onChange={(e) => handleChange(e, setColumnGap, 0, 100)}
            />
          </li>
          <li>
            <label>
              Row Gap <span>(in px)</span>
            </label>
            <input
              type="number"
              min={0}
              max={100}
              defaultValue={rowGap}
              onChange={(e) => handleChange(e, setRowGap, 0, 100)}
            />
          </li>
        </ul>
      </div>

      <div className="Playground">
        <div className="Grid" ref={gridRef}>
          {Array(columns * rows)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="Cell" />
            ))}
          <div className="Frame" />
        </div>
      </div>
    </div>
  )
}

export default GridGeneratorPage
