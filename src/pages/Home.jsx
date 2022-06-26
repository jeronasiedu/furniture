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
} from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
const Home = () => {
  const color = useColorModeValue("gray.600", "gray.300")
  const slides = [
    {
      image: "/images/image2.png",
      price: "2500.00",
      color,
    },
    {
      image: "/images/image3.png",
      price: "4000.00",
      color: "primary",
    },
    {
      image: "/images/armchair.png",
      price: "1200.00",
      color,
    },
  ]
  return (
    <VStack py={12} spacing={[5]} px={3}>
      <Heading
        textTransform="capitalize"
        size="2xl"
        maxW="2xl"
        textAlign="center"
      >
        Make your interior more Minimalistic
      </Heading>
      <Text fontSize="xl" color={color}>
        {" "}
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
                  bg="white"
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
      <Stack direction={["column", "row"]}>
        <HStack></HStack>
        <VStack></VStack>
      </Stack>
    </VStack>
  )
}

export default Home
