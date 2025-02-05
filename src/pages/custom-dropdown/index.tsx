import "./CustomDropdownPage.css"

import CustomDropdown from "./src/components/CustomDropDown"

import cover from "./src/img/cover.svg"

function CustomDropdownPage() {
  return (
    <div className="CustomDropdownPage">
      <img
        className="cover"
        src={cover}
        alt="advent of javascript day 02 cover image"
      />
      <CustomDropdown />
    </div>
  )
}

export default CustomDropdownPage
