import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";

export const Analytics = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const firebaseUrl =
    "https://user-credential-211d0-default-rtdb.asia-southeast1.firebasedatabase.app/course.json";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(firebaseUrl);
        setCourses(response.data || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch course data.");
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Colors based on the current theme
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const tableBg = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("teal.600", "teal.300");
  const textColor = useColorModeValue("gray.700", "gray.200");

  if (loading) {
    return (
      <Box p={4} textAlign="center">
        <Spinner size="xl" />
        <Text mt={2} fontSize="lg" color={textColor}>
          Loading...
        </Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={4} textAlign="center">
        <Text fontSize="lg" color="red.500">
          {error}
        </Text>
      </Box>
    );
  }

  return (
    <Box p={6} bg={bgColor} borderRadius="md" shadow="md">
      <Heading mb={6} textAlign="center" color={headingColor}>
        Course Analytics
      </Heading>
      <Table variant="striped" colorScheme={useColorModeValue("teal", "gray")}>
        <Thead>
          <Tr>
            <Th color={textColor}>Course</Th>
            <Th color={textColor}>Duration</Th>
            <Th color={textColor}>Fees</Th>
          </Tr>
        </Thead>
        <Tbody bg={tableBg}>
          {courses.length === 0 ? (
            <Tr>
              <Td colSpan={3} textAlign="center" color={textColor}>
                No courses available.
              </Td>
            </Tr>
          ) : (
            courses.map((ele, index) => (
              <Tr key={index}>
                <Td>{ele.course}</Td>
                <Td>{ele.duration}</Td>
                <Td>{ele.fees}</Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </Box>
  );
};