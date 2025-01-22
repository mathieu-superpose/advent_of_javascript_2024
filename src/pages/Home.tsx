import { NavLink } from "react-router"

import "./Home.css"

import cover from "./src/img/cover.svg"
import gifts from "./src/img/footer.png"

function Card({
  link,
  title,
  description,
}: {
  link: string
  title: string
  description: string
}) {
  return (
    <li className="card" key={link}>
      <NavLink to={link}>
        <h2>{title}</h2>
        <p>{description}</p>
      </NavLink>
    </li>
  )
}

function Home() {
  return (
    <div className="Home">
      <header>
        <img
          className="cover"
          src={cover}
          alt="the advent of javascript 2024"
        />
      </header>
      <main>
        <ul className="card-list">
          <li className="card-link" key="password-input">
            <Card
              link="/password-input"
              title="Password Input"
              description="Day #01: Reveal & Hide a password input"
            />
          </li>
          <li className="card-link" key="custom-dropdown">
            <Card
              link="/custom-dropdown"
              title="Custom Dropdown"
              description="Day #02: Custom dropdown menu"
            />
          </li>
          <li className="card-link" key="resizable-text-area">
            <Card
              link="/resizable-text-area"
              title="Resizable Text Area"
              description="Day #03: Create a resizable text area"
            />
          </li>
          <li className="card-link" key="resizable-panels">
            <Card
              link="/resizable-panels"
              title="Resizable Panels"
              description="Day #04: Create resizable panels"
            />
          </li>
          <li className="card-link" key="character-counter">
            <Card
              link="/character-counter"
              title="Character Counter"
              description="Day #05: Create a character counter"
            />
          </li>
          <li className="card-link" key="copy-to-clipboard">
            <Card
              link="/copy-to-clipboard"
              title="Copy to Clipboard"
              description="Day #06: Copy to clipboard"
            />
          </li>
          <li className="card-link" key="slugify-title">
            <Card
              link="/slugify-title"
              title="Slugify Title"
              description="Day #07: Slugify a title"
            />
          </li>
          <li className="card-link" key="tag-input-field">
            <Card
              link="/tag-input-field"
              title="Tag Input Editor"
              description="Day #08: Create a tag input editor"
            />
          </li>
          <li className="card-link" key="persistant-data">
            <Card
              link="/persistent-data"
              title="Persistant Form Data"
              description="Day #09: Persistant form data"
            />
          </li>
          <li className="card-link" key="floating-action-button">
            <Card
              link="/floating-action-button"
              title="Floating Button"
              description="Day #10: Floating button action"
            />
          </li>
          <li className="card-link" key="digital-clock">
            <Card
              link="/digital-clock"
              title="Digital Clock"
              description="Day #11: Digital Clock"
            />
          </li>
          <li className="card-link" key="ninja-quote">
            <Card
              link="/ninja-quote"
              title="Quote Generator"
              description="Day #12: Quote Generator"
            />
          </li>
          <li className="card-link" key="temperature-converter">
            <Card
              link="/temperature-converter"
              title="Temperature Converter"
              description="Day #13: Temperature Converter"
            />
          </li>
          <li className="card-link" key="conditional-selection">
            <Card
              link="/conditional-selection"
              title="Conditional Selection"
              description="Day #14: Conditional Selection"
            />
          </li>
          <li className="card-link" key="reponsive-youtube-embed">
            <Card
              link="/reponsive-youtube-embed"
              title="Responsive YouTube"
              description="Day #15: Responsive YouTube"
            />
          </li>
          <li className="card-link" key="grid-generator">
            <Card
              link="/grid-generator"
              title="Grid Layout Generator"
              description="Day #16: Grid layout generator"
            />
          </li>
          <li className="card-link" key="side-scroll">
            <Card
              link="/side-scroll"
              title="Side Scroll"
              description="Day #17: Side Scroll"
            />
          </li>
          <li className="card-link" key="toggle-pricing">
            <Card
              link="/toggle-pricing"
              title="Toggle Pricing"
              description="Day #18: Toggle Pricing"
            />
          </li>
          <li className="card-link" key="multi-step-form">
            <Card
              link="/multi-step-form"
              title="Multi Step Form"
              description="Day #19: Multi Step Form"
            />
          </li>
          <li className="card-link" key="infinite-scroll">
            <Card
              link="/infinite-scroll"
              title="Infinite Scroll"
              description="Day #20: Infinite Scroll"
            />
          </li>
          <li className="card-link" key="calendar-picker">
            <Card
              link="/calendar-picker"
              title="Calendar Picker"
              description="Day #21: Calendar Picker"
            />
          </li>
          <li className="card-link" key="drag-and-drop-cards">
            <Card
              link="/drag-and-drop-cards"
              title="Drag and Drop Cards"
              description="Day #22: Drag and Drop Cards"
            />
          </li>
          <li className="card-link" key="expense-tracker">
            <Card
              link="/expense-tracker"
              title="Expense Tracker"
              description="Day #23: Expense Tracker"
            />
          </li>
          <li className="card-link" key="box-shadow-generator">
            <Card
              link="/box-shadow-generator"
              title="Box Shadow Generator"
              description="Day #24: Box Shadow Generator"
            />
          </li>
        </ul>
      </main>

      <footer>
        <img className="gifts" src={gifts} alt="gifts" />
      </footer>
    </div>
  )
}

export default Home
