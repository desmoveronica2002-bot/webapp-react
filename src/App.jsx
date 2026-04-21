
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/films/:filmsId" element={<FilmPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
