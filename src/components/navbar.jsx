import { Box, Button, Flex, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";  // Import the icons
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Image } from "@chakra-ui/react"; // Correct import


export const Navbar = () => {
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const { toggleColorMode } = useColorMode();
  const bgGradient = useColorModeValue(
    "linear-gradient(90deg, #008080, #00BFFF)", // Light mode gradient
    " linear-gradient(135deg, #0f2027, #203A43, #2C5364)"  // Dark mode gradient
      
  );
  const textColor = useColorModeValue("black", "white");

  let { flag, user } = isLogged;

  function HandleNavigate(path) {
    navigate(path);
  }

  return (
    <Box
      bgGradient={bgGradient}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="1000"
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex align="center" >
      <Image
          src="https://media.istockphoto.com/id/535264357/photo/3d-letter-collection-h.webp?a=1&b=1&s=612x612&w=0&k=20&c=HByGrqZ-CFWZPXYUQ2E42_2CaAL6Jdxr1MVMg3dLdQ8=" // Replace with your LMS logo URL
          alt="LMS Logo"
          borderRadius="full"
          boxSize="40px" // You can adjust this size
          mr={4} // Margin to give space between the logo and the buttons
        />

      <Button m="1" color={textColor} onClick={() => HandleNavigate("/")}>Home</Button>
      <Button m="1" color={textColor} onClick={() => HandleNavigate("/courses")}>Course</Button>
      <Button m="1" color={textColor} onClick={() => HandleNavigate("/adminLogin")}>Admin</Button>
      <Button m="1" color={textColor} onClick={() => HandleNavigate("/analytic")}>Analytics</Button>

      
      </Flex>

      <Flex>
        {flag ? (
          <>
            <Button m="1" color={textColor} onClick={() => HandleNavigate("/dashboard")}>Dashboard</Button>
            {/* <Button m="1" color={textColor} onClick={() => HandleNavigate("/profile")}>Profile</Button> */}
            <Button m="1" color={textColor}>Hi, {user}</Button>
            <Button
              m="1"
              color={textColor}
              onClick={() => {
                setIsLogged({
                  flag: false,
                  user: "",
                });
                HandleNavigate("/login");
              }}
            >
              Log out
            </Button>
          </>
        ) : (
          <Flex>
            <Button m="1" color={textColor} onClick={() => HandleNavigate("/login")}>Login</Button>
            <Button m="1" color={textColor} onClick={() => HandleNavigate("/signup")}>Signup</Button>
          </Flex>
        )}

        {/* Light/Dark Mode Toggle Button with Icon */}
        <IconButton
          m="1"
          onClick={toggleColorMode}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)} // Show Moon for light mode, Sun for dark mode
          aria-label="Toggle Theme"
          isRound
        />
      </Flex>
    </Box>
  );
};

// linear-gradient(90deg, #1a202c, #2d3748)
