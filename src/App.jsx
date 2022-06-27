import { Navigation } from "./components"
import { Routes, Route, useLocation } from "react-router-dom"
import { Cart, Favorites, Home } from "./pages"
import { AnimatePresence } from "framer-motion"
function App() {
  const location = useLocation()
  return (
    <>
      <Navigation />
      <AnimatePresence>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
export default App
