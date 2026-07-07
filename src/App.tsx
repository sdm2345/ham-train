import { useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Practice } from './pages/Practice'
import { Exam } from './pages/Exam'
import { ErrorBook } from './pages/ErrorBook'
import { Review } from '@/pages/Review'
import Stats from '@/pages/Stats'
import { seedIfEmpty } from './db/seed'

function AppRoutes() {
  useEffect(() => {
    seedIfEmpty().catch(console.error)
  }, [])

  return (
    <div className="flex min-h-svh flex-col">
      <main className="flex-1 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/errors" element={<ErrorBook />} />
          <Route path="/review" element={<Review />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
      <NavBar />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}
