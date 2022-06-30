import { Heading, Show, Text, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
const Favorites = () => {
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
    >
      <Heading textAlign="center">Favorites page coming soon</Heading>
      <Show below="md">
        <Text>I just wanted to make a commit</Text>
      </Show>
    </VStack>
  )
}

export default Favorites
