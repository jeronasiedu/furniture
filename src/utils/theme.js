import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.100", "#1d1d1f")(props),
      },
    }),
  },
  shadows: {
    stripe: "rgba(0, 0, 0, 0.05) 0 -1.5px 2px",
  },
  colors: {
    primary: "#2d53fc",
  },
})

export default theme
