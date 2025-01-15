import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.tsx"
import PasswordInput from "./pages/password-input/index.tsx"

import ResizableTextAreaPage from "./pages/resizable-text-area/ResizableTextAreaPage.tsx"
import ResizablePanelsPage from "./pages/resizable-panels/ResizablePanelsPage.tsx"
import CharacterCounterPage from "./pages/character-counter/CharacterCounterPage.tsx"
import CopyToClipboardPage from "./pages/copy-to-clipboard/CopyToClipboardPage.tsx"
import SlugifyTitlePage from "./pages/slugify-title/SlugifyTitlePage.tsx"
import TagInputFieldPage from "./pages/tag-input-field/TagInputFieldPage.tsx"
import PersistentDataPage from "./pages/persistent-data/PersistentDataPage.tsx"
import DigitalClockPage from "./pages/digital-clock/DigitalClockPage.tsx"
import FloatingActionButtonPage from "./pages/floating-action-button/FloatingActionButtonPage.tsx"
import NinjaQuotePage from "./pages/ninja-quote/NinjaQuotePage.tsx"
import TemperatureConverterPage from "./pages/temperature-converter/TemperatureConverterPage.tsx"
import ConditonalSelectionPage from "./pages/conditional-selection/ConditionalSelectionPage.tsx"
import ResponsiveYoutubeEmbedPage from "./pages/reponsive-youtube-embed/ResponsiveYoutubeEmbedPage.tsx"
import GridGeneratorPage from "./pages/grid-generator/GridGeneratorPage.tsx"
import SideScrollPage from "./pages/side-scroll/SideScrollPage.tsx"
import TogglePricingPage from "./pages/toggle-pricing/TogglePricingPage.tsx"

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
        <Route path="/persistent-data" element={<PersistentDataPage />} />
        <Route path="digital-clock" element={<DigitalClockPage />} />
        <Route
          path="/floating-action-button"
          element={<FloatingActionButtonPage />}
        />
        <Route path="ninja-quote" element={<NinjaQuotePage />} />
        <Route
          path="temperature-converter"
          element={<TemperatureConverterPage />}
        />
        <Route
          path="conditional-selection"
          element={<ConditonalSelectionPage />}
        />
        <Route
          path="reponsive-youtube-embed"
          element={<ResponsiveYoutubeEmbedPage />}
        />
        <Route path="grid-generator" element={<GridGeneratorPage />} />
        <Route path="side-scroll" element={<SideScrollPage />} />
        <Route path="toggle-pricing" element={<TogglePricingPage />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
