import { Box, Input, Button, Text, Stack, useColorMode } from "@chakra-ui/react";
import { useRef, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const firebaseUrl =
    "https://ferc-db-a4c35-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json";

  const username = useRef(null);
  const password = useRef(null);
  const { setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const { colorMode } = useColorMode(); // Get the current color mode (light or dark)
  const [error, setError] = useState("");

  function HandleForm(e) {
    e.preventDefault();

    const usernameValue = username.current.value.trim();
    const passwordValue = password.current.value.trim();

    if (!usernameValue || !passwordValue) {
      setError("Please enter both username and password.");
      return;
    }

    const obj = {
      username: usernameValue,
      password: passwordValue,
    };

    axios
      .get(firebaseUrl) // Direct GET request to Firebase
      .then((res) => {
        const users = res.data || {};
        const filteredData = Object.entries(users).filter(
          ([id, user]) =>
            user.username === obj.username && user.password === obj.password
        );

        if (filteredData.length === 0) {
          setError("Wrong Credentials");
        } else {
          // Store the logged-in user in the context
          setIsLogged({
            flag: true,
            user: filteredData[0][1].username,
          });

          // Store the selected course in localStorage (if any)
          const selectedCourse = filteredData[0][1].selectedCourse || null;
          if (selectedCourse) {
            localStorage.setItem("selectedCourse", selectedCourse);
          }

          // Redirect to the dashboard
          navigate("/dashboard");
        }
      })
      .catch(() => {
        setError("Failed to connect to the server.");
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
          ? "white"  // Background for light mode
          : "linear-gradient(135deg, #3A6073, #16222A)" // Background for dark mode
      }
    >
      <Box
        bg={colorMode === "light" ? "lightBlue" : "#12252C"} // Transparent for gradient to show in dark mode
        p={8}
        borderRadius="md"
        shadow="md"
        width="350px"
        textAlign="center"
        color={colorMode === "light" ? "black" : "#FFFFFF"} // Text color based on mode
      >
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          LOG In
        </Text>
        <form onSubmit={HandleForm}>
          <Stack spacing={4}>
            <Input
              ref={username}
              placeholder="Username"
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
            {error && <Box color="red.500">{error}</Box>}
            <Button type="submit" colorScheme="blue" size="md" width="100%">
              LOG IN
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
    
    </>
  );
};
