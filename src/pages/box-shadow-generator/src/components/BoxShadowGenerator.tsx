import { useEffect, useRef, useState } from "react"

import "./BoxShadowGenerator.css"

function SliderPicker({
  label,
  value,
  setValue,
  min,
  max,
  step,
  unit,
}: {
  label: string
  value: number
  setValue: any
  min: number
  max: number
  step: number
  unit?: string
}) {
  return (
    <div className="SliderPicker">
      <label className="label">{label}</label>

      <div className="input-group">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {unit}
      </div>

      <input
        type="range"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={min}
        max={max}
        step={step}
      />
    </div>
  )
}

function ColorPicker({
  label,
  value,
  setValue,
}: {
  label: string
  value: string
  setValue: any
}) {
  const colorRef = useRef<HTMLInputElement>(null)
  const [color, setColor] = useState(value)

  // const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newColor = e.target.value

  //   if (!newColor.match(/^#[0-9a-fA-F]{6}$/)) {
  //     return
  //   }

  //   setValue(newColor)
  // }

  useEffect(() => {
    if (/^#[0-9a-fA-F]{6}$/.test(color)) {
      setValue(color)
    } else {
      const wait = setTimeout(() => {
        if (colorRef.current) {
          colorRef.current.value = value
        }
      }, 1000)

      return () => {
        clearTimeout(wait)
      }
    }
  }, [color])

  useEffect(() => {
    if (colorRef.current) {
      colorRef.current.value = value
      setColor(value)
    }
  }, [value])

  return (
    <div className="ColorPicker">
      <label>{label}</label>
      <input
        className="color-picker"
        type="color"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        ref={colorRef}
        className="color-input"
        type="text"
        defaultValue={value}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  )
}

function TogglePicker({
  before,
  after,
  value,
  setValue,
}: {
  before: string
  after: string
  value: boolean
  setValue: any
}) {
  return (
    // <div className="TogglePicker">
    //   <label>{label}</label>
    //   <input
    //     type="checkbox"
    //     checked={value}
    //     onChange={(e) => setValue(e.target.checked)}
    //   />
    // </div>

    <div className="TogglePicker">
      <label className="before">{before}</label>
      <label className="switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={value}
          onChange={(e) => setValue(e.target.checked)}
        />
        <div className="slider round"></div>
      </label>
      <label className="after">{after}</label>
    </div>
  )
}

function BoxShadowGenerator() {
  const [horizontalLength, setHorizontalLength] = useState(0)
  const [verticalLength, setVerticalLength] = useState(0)
  const [blurRadius, setBlurRadius] = useState(0)
  const [spreadRadius, setSpreadRadius] = useState(0)

  const [shadowColor, setShadowColor] = useState("#000000")
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [boxColor, setBoxColor] = useState("#000000")

  const [opacity, setOpacity] = useState(1)

  const [inset, setInset] = useState(false)

  return (
    <div className="BoxShadowGenerator">
      <div className="Generator">
        <h1>CSS Box Shadow Generator</h1>

        <div className="Settings">
          <section className="left">
            <SliderPicker
              label="Horizontal Length"
              value={horizontalLength}
              setValue={setHorizontalLength}
              min={-100}
              max={100}
              step={1}
              unit="px"
            />
            <SliderPicker
              label="Vertical Length"
              value={verticalLength}
              setValue={setVerticalLength}
              min={-100}
              max={100}
              step={1}
              unit="px"
            />

            <SliderPicker
              label="Blur Radius"
              value={blurRadius}
              setValue={setBlurRadius}
              min={0}
              max={100}
              step={1}
              unit="px"
            />

            <SliderPicker
              label="Spread Radius"
              value={spreadRadius}
              setValue={setSpreadRadius}
              min={-100}
              max={100}
              step={1}
              unit="px"
            />
          </section>
          <section className="right">
            <ColorPicker
              label="Shadow Color"
              value={shadowColor}
              setValue={setShadowColor}
            />
            <ColorPicker
              label="Background"
              value={backgroundColor}
              setValue={setBackgroundColor}
            />
            <ColorPicker
              label="Box Color"
              value={boxColor}
              setValue={setBoxColor}
            />
            <SliderPicker
              label="Opacity"
              value={opacity}
              setValue={setOpacity}
              min={0}
              max={1}
              step={0.1}
            />
            <TogglePicker
              before="Outline"
              after="Inset"
              value={inset}
              setValue={setInset}
            />
          </section>
        </div>
      </div>
      <div className="Preview" style={{ backgroundColor: backgroundColor }}>
        <div
          className="Box"
          style={{
            boxShadow: `${
              inset ? "inset" : ""
            } ${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`,
            backgroundColor: boxColor,
            color: boxColor,
            opacity: opacity,
          }}
        />
      </div>
    </div>
  )
}

export default BoxShadowGenerator
