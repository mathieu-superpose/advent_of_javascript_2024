import { useEffect, useState } from "react"

import "./TogglePricing.css"

import logo from "../img/logo.svg"

function AnimatedValue({ value }: { value: number }) {
  const [prevValue, setPrevValue] = useState(value)

  // if the value changes, progressively update the previous value to the new value
  useEffect(() => {
    console.log("change")

    if (value !== prevValue) {
      const diff = value - prevValue
      const step = Math.sign(diff) * Math.max(1, Math.abs(diff) / 10)

      const interval = setInterval(() => {
        setPrevValue((prevValue) => {
          const nextValue = prevValue + step
          if (Math.abs(nextValue - value) < Math.abs(step)) {
            clearInterval(interval)
            return value
          }
          return nextValue
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [value, prevValue])

  return (
    <p className="animated-value">
      <span className="currency">$</span>
      {value}
    </p>
  )
}

function Description({ isTeam }: { isTeam: boolean }) {
  if (isTeam) {
    return (
      <section className="description">
        <h2>TEAM</h2>
        <p>For fast-growing teams</p>
        <ul>
          <li>More usage than pro</li>
          <li>Central billing and adminitration</li>
          <li>Early access to collaboration features</li>
        </ul>
      </section>
    )
  }

  return (
    <section className="description">
      <h2>PRO</h2>
      <p>For Claude power users</p>
      <ul>
        <li>More usage than Free</li>
        <li>Access to Projects to organize documents and chats</li>
        <li>
          Ability to use more models, like Claude 3.5 Sonnet and Claude 3 Opus
        </li>
        <li>Early access to new features</li>
      </ul>
    </section>
  )
}

function Pricing({ isTeam }: { isTeam: boolean }) {
  return (
    <section className="pricing">
      <div className="amount">
        <AnimatedValue value={isTeam ? 25 : 18} />
      </div>
      <p className="per-month">
        Per user per month with annual subscription discount.
        <br />${isTeam ? 300 : 216} billed up front. ${isTeam ? 30 : 20} if
        billed monthly.
      </p>
    </section>
  )
}

function TogglePricing() {
  const [isTeam, setIsTeam] = useState(false)

  return (
    <div className="TogglePricing">
      <header>
        <img src={logo} alt="logo" />
      </header>

      <Pricing isTeam={isTeam} />
      <Description isTeam={isTeam} />

      <div className="toggleTeam">
        <span className="pro">Pro</span>
        <label className="switch" htmlFor="toggle">
          <input
            type="checkbox"
            id="toggle"
            checked={isTeam}
            onChange={() => setIsTeam(!isTeam)}
          />
          <span className="slider round"></span>
        </label>
        <span className="team">Team</span>
      </div>
    </div>
  )
}

export default TogglePricing
