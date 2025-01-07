import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.tsx"
import PasswordInput from "./pages/password-input/index.tsx"
import CustomDropdownPage from "./pages/custom-dropdown/index.tsx"

import NoMatch from "./pages/NoMatch"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/password-input" element={<PasswordInput />} />
        <Route path="/custom-dropdown" element={<CustomDropdownPage />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
