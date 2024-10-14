import { Box, Input, Text, Stack, Button, useColorMode } from "@chakra-ui/react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/footer";

export const SignUp = () => {
  let url =
    "https://ferc-db-a4c35-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json";

  let username = useRef(null);
  let password = useRef(null);
  let navigate = useNavigate();
  const { colorMode } = useColorMode(); // Hook to get current color mode

  function HandleForm(e) {
    e.preventDefault();

    let obj = {
      username: username.current.value,
      password: password.current.value,
    };
    axios.post(url, obj).then((res) => {
      alert("User saved in DB successfully");
      navigate("/login");
    });
  }

  return (
    <>
    <Box
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient={
        colorMode === "light"
          ? "white"  // Light mode gradient
          : "linear-gradient(135deg, #3A6073, #16222A)" // Dark mode gradient
      }
    >
      <Box
        bg={colorMode === "light" ? "lightBlue" : "#12252C"} // Transparent for dark mode gradient background
        p={8}
        m={200}
        borderRadius="md"
        shadow="md"
        width="350px"
        textAlign="center"
        color={colorMode === "light" ? "black" : "#FFFFFF"} // Text color based on mode
      >
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          Sign Up
        </Text>
        <form onSubmit={HandleForm}>
          <Stack spacing={4}>
            <Input
              ref={username}
              placeholder="Your email"
              size="md"
              variant="filled"
              focusBorderColor="blue.500"
            />
            <Input
              ref={password}
              type="password"
              placeholder="Your password"
              size="md"
              variant="filled"
              focusBorderColor="blue.500"
            />
            <Button type="submit" colorScheme="blue" size="md" width="100%">
              SIGN UP
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
   
    </>
  );
};
