import { Heading, VStack, Show } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { CartItem } from "../components"
const Cart = () => {
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
        <VStack spacing={4} w="full" pb={24}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </VStack>
      </Show>
    </VStack>
  )
}

export default Cart
