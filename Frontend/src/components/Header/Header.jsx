import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { DesktopNav, MobileNav } from "./Navigation.jsx";
import Logo from "./Logo.jsx"; // Import the Logo component
import { HashLink as Link } from "react-router-hash-link"; // Add this import


const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000} // Ensure it's on top of all elements
      transition="transform 0.3s ease-in-out"
      transform={isVisible ? "translateY(0)" : "translateY(-100%)"}
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            color={useColorModeValue("pink.600", "pink.300")}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Logo />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {/* Add your buttons or links here */}
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Header;
