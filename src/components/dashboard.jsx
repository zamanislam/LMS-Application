import {
  Box,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  HStack,
  Divider
} from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Profile } from "./Profile";

 // Import Profile component

export const Dashboard = () => {
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Handle login redirection in useEffect
  useEffect(() => {
    if (isLogged.flag === false) {
      navigate("/login");
    }
  }, [isLogged, navigate]);

  // Fetch the selected course from localStorage
  useEffect(() => {
    const course = localStorage.getItem("selectedCourse"); // Retrieve the string directly
    if (course) {
      setSelectedCourse(course); // No need for JSON.parse since it's a plain string
    }
  }, []);

  const handleSelectCourse = () => {
    navigate("/courses");
  };

  return (
    <HStack align="start" spacing={4}>
      {/* Sidebar */}
      <Box
        bg="teal.700"
        color="white"
        width={useBreakpointValue({ base: "full", md: "20%" })}
        height="100vh"
        p={4}
        boxShadow="lg"
        position="sticky"
        top={0}
      >
        <Text fontWeight="bold" fontSize="xl" mb={4}>
          Dashboard Menu
        </Text>
        <Divider mb={4} />
        <VStack align="start" spacing={4}>
        <Button
            variant="solid"
            colorScheme="teal"
            w="full"
            onClick={() => navigate("/assignments")}
            _hover={{ bg: "teal.600" }}
          >
            Assignments
          </Button>
          <Button
            variant="solid"
            colorScheme="teal"
            w="full"
            onClick={() => navigate("/lectures")}
            _hover={{ bg: "teal.600" }}
          >
            Lectures
          </Button>
          <Button
            variant="solid"
            colorScheme="teal"
            w="full"
            onClick={() => navigate("/quiz")}
            _hover={{ bg: "teal.600" }}
          >
            Quizzes
          </Button>
        </VStack>
      </Box>

      {/* Main Content */}
      <Box position="relative" p={4} flex="1">
        {/* Profile Section in Top Right Corner */}
        <Box
          position="absolute"
          top={4}
          right={4}
          p={4}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          width={useBreakpointValue({ base: "full", sm: "auto" })}
          textAlign="center"
        >
          <Profile />
        </Box>

        {/* Dashboard Content */}
        <VStack spacing={4} align="start">
          <Text fontSize="2xl">Welcome, {isLogged.user}</Text>
          {selectedCourse ? (
            <Text mt={4}>You have opted for the course: {selectedCourse}</Text>
          ) : (
            <Button mt={4} onClick={handleSelectCourse} colorScheme="teal">
              Add Course
            </Button>
          )}
        </VStack>
      </Box>
    </HStack>
  );
};