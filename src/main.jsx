import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./utils/theme"
import { BrowserRouter } from "react-router-dom"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import { registerSW } from "virtual:pwa-register"
import toast, { Toaster } from "react-hot-toast"
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <Toaster />
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </BrowserRouter>
)
const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {
    toast.success("Ready to work offline")
  },
})
