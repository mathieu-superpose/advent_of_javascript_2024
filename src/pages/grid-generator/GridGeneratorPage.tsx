import { SetStateAction, useEffect, useRef, useState } from "react"

import "./GridGeneratorPage.css"

function GridGeneratorPage() {
  const gridRef = useRef<HTMLDivElement>(null)
  const colControlRef = useRef<HTMLUListElement>(null)
  const rowControlRef = useRef<HTMLUListElement>(null)

  const [columns, setColumns] = useState(3)
  const [rows, setRows] = useState(3)
  const [columnGap, setColumnGap] = useState(0)
  const [rowGap, setRowGap] = useState(0)

  const [rowDHeight, setRowWidth] = useState([...Array(12)].map((_r) => 1))
  const [colWidth, setColWidth] = useState([...Array(12)].map((_r) => 1))

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

  const handleControlChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    initialArray: number[],
    setChange: {
      (value: SetStateAction<number[]>): void
      (value: SetStateAction<number[]>): void
    },
    min = 1,
    max = 12
  ) => {
    const value = e.target.value
    if (/[^0-9]/.test(value)) {
      return
    }
    if (value.length === 0) {
      return
    }
    const num = parseInt(value)
    if (num < min || num > max) {
      return
    }

    const arr = initialArray.map((v, i) => (i === index ? num : v))

    setChange(arr)
  }

  useEffect(() => {
    if (
      !gridRef?.current ||
      !colControlRef?.current ||
      !rowControlRef?.current
    ) {
      return
    }

    const gridTemplateColumns = colWidth
      .slice(0, columns)
      .map((v) => `${v}fr`)
      .join(" ")
    gridRef.current.style.gridTemplateColumns = gridTemplateColumns

    const gridTemplateRows = rowDHeight
      .slice(0, rows)
      .map((v) => `${v}fr`)
      .join(" ")
    gridRef.current.style.gridTemplateRows = gridTemplateRows

    gridRef.current.style.columnGap = `${columnGap}px`
    gridRef.current.style.rowGap = `${rowGap}px`

    colControlRef.current.style.gridTemplateColumns = gridTemplateColumns
    rowControlRef.current.style.gridTemplateRows = gridTemplateRows
  }, [rows, columns, columnGap, rowGap, rowDHeight, colWidth])

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

          <ul ref={colControlRef} className="ColControl">
            {Array(columns)
              .fill(null)
              .map((_, index) => (
                <li className="controlContainer" key={`colControl${index}`}>
                  <div className="Control">
                    <input
                      type="number"
                      min={1}
                      max={12}
                      defaultValue={1}
                      onChange={(e) =>
                        handleControlChange(
                          e,
                          index,
                          colWidth,
                          setColWidth,
                          1,
                          12
                        )
                      }
                    />
                    <span>fr</span>
                  </div>
                </li>
              ))}
          </ul>

          <ul ref={rowControlRef} className="RowControl">
            {Array(rows)
              .fill(null)
              .map((_, index) => (
                <li className="controlContainer" key={`rowControl${index}`}>
                  <div className="Control">
                    <input
                      type="number"
                      min={1}
                      max={12}
                      defaultValue={1}
                      onChange={(e) =>
                        handleControlChange(
                          e,
                          index,
                          rowDHeight,
                          setRowWidth,
                          1,
                          12
                        )
                      }
                    />
                    <span>fr</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GridGeneratorPage
