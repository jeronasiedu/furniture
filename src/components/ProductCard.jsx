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
import { useState } from "react"
const ProductCard = ({ image, amount }) => {
  const cardBg = useColorModeValue("#fff", "#282b33")
  const textColor = useColorModeValue("gray.600", "gray.300")
  const heartColor = useColorModeValue("gray.700", "gray.100")
  const [isLiked, setIsLiked] = useState(false)
  const handleLike = () => {
    setIsLiked(!isLiked)
  }

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
        <IconButton
          icon={<BsHeart color={isLiked ? "red" : heartColor} />}
          isRound
          alignSelf="flex-end"
          onClick={handleLike}
        />
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
          <IconButton icon={<BsBag color="#2d53fc" />} isRound />
        </Flex>
      </VStack>
    </Box>
  )
}

export default ProductCard
