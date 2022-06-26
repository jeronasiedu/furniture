import { Navigation } from "./components"
import { Routes, Route } from "react-router-dom"
import { Cart, Favorites, Home, Profile } from "./pages"
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}
export default App
