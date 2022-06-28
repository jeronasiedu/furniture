import { CartItem } from "./CartItem"
import {
  Heading,
  VStack,
  Show,
  Text,
  HStack,
  Box,
  Image,
  Center,
  Spacer,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react"
import { motion } from "framer-motion"

const Cart = () => {
  const cardBg = useColorModeValue("#fff", "#282b33")
  const imageBg = useColorModeValue("gray.50", "blackAlpha.100")
  const buttonsBg = useColorModeValue("gray.200", "blackAlpha.400")
  const textColor = useColorModeValue("#cfd0d1", "#838589")

  return (
    <VStack
      as={motion.div}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      px={4}
    >
      <Show above="md">
        <Heading textAlign="center">Cart page coming soon</Heading>
      </Show>
      <Show below="md">
        <Heading alignSelf="start" mb={4}>
          Shopping Cart
        </Heading>
        <CartItem
          cardBg={cardBg}
          imageBg={imageBg}
          textColor={textColor}
          buttonsBg={buttonsBg}
          testToast={testToast}
        />
      </Show>
    </VStack>
  )
}

export default Cart
