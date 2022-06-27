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
import { BiMinus, BiPlus } from "react-icons/all"
const Cart = () => {
  const cardBg = useColorModeValue("#fff", "#282b33")
  const imageBg = useColorModeValue("gray.50", "blackAlpha.100")
  const buttonsBg = useColorModeValue("gray.300", "blackAlpha.300")
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
        <HStack
          w="full"
          bg={cardBg}
          p={2}
          shadow="md"
          alignItems="flex-start"
          h="8rem"
          rounded="md"
        >
          <Center p={3} w="8rem" h="full" bg={imageBg} rounded="md" shadow="sm">
            <Image
              src="/images/image4.png"
              alt="red sofa"
              w="full"
              objectFit="cover"
            />
          </Center>
          <VStack alignItems="flex-start" h="full" w="full">
            <Heading size="md">Levi Armchair</Heading>
            <Text color={textColor}>Cultured white</Text>
            <Spacer />
            <HStack justifyContent="space-between" w="full">
              <Text fontWeight="semibold" fontSize="xl">
                $38.99
              </Text>
              <HStack bg={buttonsBg} px={2} py={1} rounded="full">
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
