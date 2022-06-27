import {
  VStack,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Box,
  Center,
  Stack,
  HStack,
  Button,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import ProductCard from "../components/ProductCard"
import { motion } from "framer-motion"
const Home = () => {
  const color = useColorModeValue("gray.600", "gray.300")
  const primaryColor = useColorModeValue("primary", "#fff")
  const slides = [
    {
      image: "/images/image2.png",
      price: "2500.00",
      color,
    },
    {
      image: "/images/image3.png",
      price: "4000.00",
      color: primaryColor,
    },
    {
      image: "/images/image4.png",
      price: "1200.00",
      color,
    },
  ]
  const smallImages = [
    {
      image: "/images/image2.png",
      alt: "random image",
    },
    {
      image: "/images/image3.png",
      alt: "random image",
    },
    {
      image: "/images/image7.png",
      alt: "random image",
    },
  ]
  const [large] = useMediaQuery("(min-width: 980px)")
  const products = [
    { name: "", price: "", amount: "137", image: "/images/image3.png" },
    { name: "", price: "", amount: "166", image: "/images/image2.png" },
    { name: "", price: "", amount: "106", image: "/images/image3.png" },
    { name: "", price: "", amount: "187", image: "/images/image4.png" },
    { name: "", price: "", amount: "125", image: "/images/image5.png" },
    { name: "", price: "", amount: "129", image: "/images/image6.png" },
    { name: "", price: "", amount: "159", image: "/images/image7.png" },
    { name: "", price: "", amount: "197", image: "/images/armchair2.png" },
    { name: "", price: "", amount: "103", image: "/images/redsofa.png" },
    { name: "", price: "", amount: "137", image: "/images/image4.png" },
  ]
  const cardBg = useColorModeValue("#fff", "#282b33")
  return (
    <VStack
      py={12}
      spacing={[5]}
      px={4}
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
      <Heading
        textTransform="capitalize"
        size="2xl"
        maxW="2xl"
        textAlign="center"
      >
        Make your interior more Minimalistic
      </Heading>
      <Text fontSize="xl" color={color}>
        Browser,Choose & Order. Very Simple
      </Text>
      <Box w="full">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 1200,
          }}
          grabCursor={true}
          modules={[Autoplay]}
          speed={1000}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
              modules: [],
              autoplay: false,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <VStack w="full">
                <Image
                  src={slide.image}
                  alt="furniture"
                  w="90%"
                  objectFit="cover"
                />
                <Heading
                  size="md"
                  bg={cardBg}
                  p={3}
                  color={slide.color}
                  shadow="sm"
                  rounded="full"
                >
                  ${slide.price}
                </Heading>
              </VStack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Stack direction={["column", "row"]} py={8} spacing={5}>
        <HStack w="full" spacing={3}>
          <VStack flex="1">
            {smallImages.map((item, index) => (
              <Center
                key={index}
                w="20"
                h="20"
                bg="whitesmoke"
                rounded="md"
                p={2}
                shadow="sm"
              >
                <Image src={item.image} alt={item.alt} />
              </Center>
            ))}
          </VStack>
          <Image
            src="/images/image6.png"
            alt="image of a chair"
            w={["70%", "80%"]}
          />
        </HStack>
        <Box w="full">
          <VStack spacing={5} maxW="md" mx="auto">
            <Heading siz="md">Comfortable sofa</Heading>
            <Text fontSize="lg" textAlign={["center", "left"]}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              doloribus recusandae dignissimos ipsa iure, reiciendis laborum
            </Text>
            <Button colorScheme="blue" alignSelf={[null, "flex-start"]}>
              Read more
            </Button>
          </VStack>
        </Box>
      </Stack>
      <VStack pb="16">
        <Heading
          textTransform="capitalize"
          size="xl"
          maxW="2xl"
          textAlign="center"
        >
          A huge collection of furniture products for your interior.
        </Heading>
        <Text fontSize="lg" color={color} maxW="2xl" textAlign="center">
          If you have the experience of 10 years in an industry no apostrophe is
          needed, if you don't have 10 years of experience no apostrophe is
          needed.
        </Text>
      </VStack>
      {large ? (
        <SimpleGrid minChildWidth="200px" w="full" spacing="4">
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </SimpleGrid>
      ) : (
        <HStack
          alignSelf="flex-start"
          spacing={4}
          w="full"
          overflowX="auto"
          scrollSnapType="x"
          className="product-card-container"
          pb={16}
        >
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </HStack>
      )}
    </VStack>
  )
}

export default Home
