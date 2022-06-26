import {
  Text,
  VStack,
  useColorModeValue,
  IconButton,
  Image,
  Center,
  Box,
  Flex,
} from "@chakra-ui/react"
import { BsHeart, BsBag } from "react-icons/all"
const ProductCard = ({ image, amount }) => {
  const cardBg = useColorModeValue("#fff", "#282b33")
  const textColor = useColorModeValue("gray.600", "gray.300")
  return (
    <Box scrollSnapAlign="center">
      <VStack
        bg={cardBg}
        p={2}
        px={4}
        rounded="lg"
        shadow="sm"
        userSelect="none"
        maxW="17rem"
      >
        <IconButton icon={<BsHeart />} isRound alignSelf="flex-end" />
        <Center w="48" p="2" h="10rem">
          <Image src={image} alt="table" objectFit="cover" w="80%" />
        </Center>
        <Box alignSelf="flex-start">
          <Text fontSize="lg" fontWeight="semibold">
            Mika Chair
          </Text>
          <Text color={textColor}>3 colors available</Text>
        </Box>
        <Flex
          alignSelf="flex-start"
          justify="space-between"
          w="full"
          align="center"
        >
          <Text fontWeight="semibold" color="#f8ae2c">
            ${amount}
          </Text>
          <IconButton icon={<BsBag />} isRound />
        </Flex>
      </VStack>
    </Box>
  )
}

export default ProductCard
