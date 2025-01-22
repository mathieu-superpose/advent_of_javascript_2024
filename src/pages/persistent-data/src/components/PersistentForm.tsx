import "./PersistentForm.css"

import PersistentTextInput from "./PersistentTextInput"
import PersistentEmailInput from "./PersistentEmailInput"
import PersistentSelect from "./PersistentSelect"
import PersistentCheckbox from "./PersistentCheckbox"
import PersistentRadioInput from "./PersistentRadioInput"

function PersistentForm() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // retrieving data from form
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const data: { [key: string]: any } = {}

    formData.forEach((value, key) => {
      if (key.includes("[]")) {
        if (!data[key]) {
          data[key] = []
        }
        data[key].push(value)
      } else {
        data[key] = value
      }
    })

    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        data[key] = value.join(", ")
      }
    })

    alert(JSON.stringify(data, null, 2))

    // console.log({ data })

    // reset form
    form.reset()

    // clear session storage
    sessionStorage.clear()

    // reset form
    form.reset()
  }

  return (
    <form className="PersistentForm" onSubmit={handleSubmit}>
      <label className="top-label" htmlFor="full-name">
        Full Name*
      </label>
      <PersistentTextInput name="full-name" initialValue="" required={true} />

      <label className="top-label" htmlFor="email">
        Email*
      </label>
      <PersistentEmailInput name="email" initialValue="" required={true} />

      <label className="top-label" htmlFor="favourite-reindeer">
        Favourite Reindeer*
      </label>
      <PersistentRadioInput
        name="favorite-reindeer"
        initialValue="dasher"
        options={[
          "Dasher",
          "Dancer",
          "Prancer",
          "Vixen",
          "Comet",
          "Cupid",
          "Donner",
          "Blitzen",
          "Rudolph",
        ]}
        required={true}
      />

      <label className="checkboxes top-label" htmlFor="holiday-movies">
        What holiday movie have you watched this year?
        <label htmlFor="elf">
          <PersistentCheckbox
            name="elf"
            group="holiday-movies[]"
            initialValue=""
          />
          Elf (2003)
        </label>
        <label htmlFor="home-alone">
          <PersistentCheckbox
            name="home-alone"
            group="holiday-movies[]"
            initialValue=""
          />
          Home Alone (1990)
        </label>
        <label htmlFor="grinch">
          <PersistentCheckbox
            name="grinch"
            group="holiday-movies[]"
            initialValue=""
          />
          The Grinch (1966)
        </label>
        <label htmlFor="wonderful-life">
          <PersistentCheckbox
            name="wonderful-life"
            group="holiday-movies[]"
            initialValue=""
          />
          It's a Wonderful Life (1946)
        </label>
        <label htmlFor="die-hard">
          <PersistentCheckbox
            name="die-hard"
            group="holiday-movies[]"
            initialValue=""
          />
          Die Hard (1988)
        </label>
      </label>

      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  )
}

export default PersistentForm
