// 樣式 (css)
import './assets/css/global.css'
import './assets/css/font.css'
// 函式庫 (library)
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// 保護頁面 (private pages)
import Menu from './pages/Menu'
import Offline from './pages/Offline'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/menu" replace />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/offline" element={<Offline />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
