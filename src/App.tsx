import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.tsx"
import PasswordInput from "./pages/password-input/index.tsx"

import ResizableTextAreaPage from "./pages/resizable-text-area/ResizableTextAreaPage.tsx"
import ResizablePanelsPage from "./pages/resizable-panels/ResizablePanelsPage.tsx"
import CharacterCounterPage from "./pages/character-counter/CharacterCounterPage.tsx"
import CopyToClipboardPage from "./pages/copy-to-clipboard/CopyToClipboardPage.tsx"
import SlugifyTitlePage from "./pages/slugify-title/SlugifyTitlePage.tsx"
import TagInputFieldPage from "./pages/tag-input-field/TagInputFieldPage.tsx"

import NoMatch from "./pages/NoMatch"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/password-input" element={<PasswordInput />} />

        <Route
          path="/resizable-text-area"
          element={<ResizableTextAreaPage />}
        />
        <Route path="/resizable-panels" element={<ResizablePanelsPage />} />
        <Route path="/character-counter" element={<CharacterCounterPage />} />
        <Route path="/copy-to-clipboard" element={<CopyToClipboardPage />} />
        <Route path="/slugify-title" element={<SlugifyTitlePage />} />
        <Route path="/tag-input-field" element={<TagInputFieldPage />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
