import {
  Heading,
  HStack,
  Link as ChakraLink,
  Spacer,
  Show,
  VStack,
  IconButton,
  Text,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react"
import { GoHome, BiHeart, BsCart3, BsPerson } from "react-icons/all"
import { Link, NavLink } from "react-router-dom"

const Navigation = () => {
  const links = [
    {
      text: "Home",
      url: "/",
      icon: <GoHome size={22} />,
    },
    {
      text: "Favorites",
      url: "/favorites",
      icon: <BiHeart size={22} />,
    },
    {
      text: "Cart",
      url: "/cart",
      icon: <BsCart3 size={22} />,
    },
    {
      text: "Profile",
      url: "/profile",
      icon: <BsPerson size={22} />,
    },
  ]
  const { toggleColorMode } = useColorMode()
  const navBg = useColorModeValue("#fff", "#282b33")
  const navColor = useColorModeValue("gray.600", "gray.300")
  return (
    <>
      <Show above="md">
        <HStack px={4} py={2} zIndex={20}>
          <Heading size="md" className="logo">
            ComFort
          </Heading>
          <Spacer />
          <HStack spacing={4}>
            {links.map((link, index) => (
              <ChakraLink as={Link} color={navColor} key={index} to={link.url}>
                {link.text}
              </ChakraLink>
            ))}
          </HStack>
          <Spacer />
        </HStack>
      </Show>
      <Show below="md">
        <HStack
          bg={navBg}
          pos="fixed"
          bottom="0"
          left={0}
          right={0}
          p={2.5}
          justifyContent="space-around"
          shadow="stripe"
          zIndex={20}
        >
          {links.map((link, index) => (
            <NavLink to={link.url}>
              {({ isActive }) => (
                <VStack key={index} spacing="0">
                  <IconButton
                    icon={link.icon}
                    variant={isActive ? "solid" : "ghost"}
                  />
                  <Text color={isActive ? "primary" : navColor}>
                    {link.text}
                  </Text>
                </VStack>
              )}
            </NavLink>
          ))}
        </HStack>
      </Show>
    </>
  )
}

export default Navigation
