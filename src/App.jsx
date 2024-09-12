import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import VideoGallery from './pages/VideoGallery'

function App() {
  ;<Layout />
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/trainings" element={<VideoGallery />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
