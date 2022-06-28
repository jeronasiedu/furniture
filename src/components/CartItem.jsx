import { BiMinus, BiPlus, AiOutlineCloudDownload } from "react-icons/all"
export function CartItem({ cardBg, imageBg, textColor, buttonsBg, testToast }) {
  return (
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
          <HStack
            bg={buttonsBg}
            px={2}
            py={1}
            rounded="full"
            onClick={testToast}
          >
            <IconButton size="sm" icon={<BiMinus />} isRound />
            <Text fontSize="lg">4</Text>
            <IconButton size="sm" icon={<BiPlus />} isRound />
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  )
}
