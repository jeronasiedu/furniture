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
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { BiMinus, BiPlus } from "react-icons/all"
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
      {/* <Heading textAlign="center">Cart page coming soon</Heading> */}
      <Show below="md">
        <Heading alignSelf="start" mb={4}>
          Shopping Cart
        </Heading>
        <HStack
          w="full"
          bg="whitesmoke"
          p={2}
          shadow="md"
          alignItems="flex-start"
          h="8rem"
          rounded="md"
        >
          <Center p={3} w="8rem" h="full" bg="gray.50" rounded="md" shadow="sm">
            <Image
              src="/images/redsofa.png"
              alt="red sofa"
              w="full"
              objectFit="cover"
            />
          </Center>
          <VStack alignItems="flex-start" h="full" w="full">
            <Heading size="md" color="#32334c">
              Levi Armchair
            </Heading>
            <Text color="gray.500">Cultured white</Text>
            <Spacer />
            <HStack justifyContent="space-between" w="full">
              <Text fontWeight="semibold" color="#32334c" fontSize="xl">
                $38.99
              </Text>
              <HStack bg="gray.300" px={2} py={1} rounded="full">
                <IconButton size="sm" icon={<BiMinus />} isRound />
                <Text fontSize="lg">4</Text>
                <IconButton size="sm" icon={<BiPlus />} isRound />
              </HStack>
            </HStack>
          </VStack>
        </HStack>
      </Show>
    </VStack>
  )
}

export default Cart
