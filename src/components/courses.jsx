import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://users-fd9bb-default-rtdb.asia-southeast1.firebasedatabase.app/Courses.json"
      )
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleCourseSelect = (courseName) => {
    // Save the selected course to localStorage.
    localStorage.setItem("selectedCourse", courseName);

    // Redirect to the dashboard after selecting a course
    navigate("/dashboard");
  };

  return (
    <>
    <Box>
      <h2>Available Courses</h2>
      {courses.map((course) => (
        <Box
          key={course.id}
          mb={4}
          p={4}
          border="1px solid #ccc"
          borderRadius="md"
        >
          <h1>{course.course}</h1>
          <h2>Duration: {course.duration}</h2>
          <h2>Fees: {course.fees}</h2>
          <Button
            mt={2}
            colorScheme="teal"
            onClick={() => handleCourseSelect(course.course)}
          >
            Select Course
          </Button>
        </Box>
      ))}
    </Box>
    
    </>
  );
};