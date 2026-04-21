
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'
import HomePage from './pages/HomePage'
import FilmPage from './pages/FilmPage'


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
