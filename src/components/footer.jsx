import {
    Box,
    Text,
    Image,
    Stack,
    Flex,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  export const Footer = () => {
    const bgColor = useColorModeValue("teal.500", "teal.700"); // Matching the navbar background
    const color = useColorModeValue("white", "gray.100"); // Matching the text color in navbar
  
    return (
      <Box as="footer" bg={bgColor} color={color} py={6} mt={10}
      // position="fixed" // Fix the footer at the bottom
      left={0}
      bottom={0}
      width="100%" // Ensure it stretches across the screen
       
      >
        <Flex
          direction={{ base: "column", md: "row" }}
        //   justify="space-between"
        
          align="center"
        >
          {/* LMS Logo and Title */}
          <Stack direction="row" align="center" ml="2">
            <Image
              boxSize="40px" // Reduced size of the image
              borderRadius="full" // Make the image circular
              objectFit="cover"
              src="https://media.istockphoto.com/id/535264357/photo/3d-letter-collection-h.webp?a=1&b=1&s=612x612&w=0&k=20&c=HByGrqZ-CFWZPXYUQ2E42_2CaAL6Jdxr1MVMg3dLdQ8=" // Replace with your logo path
              alt="LMS Logo"
            />
            <Text fontSize="lg" fontWeight="bold">
              Hi-tech
            </Text>
          </Stack>
          {/* LMS Description */}
          <Text  fontSize="sm" pl={10} textAlign="center">
          Welcome to LMS! Dive into comprehensive courses on React, JavaScript, and Data Analytics. Learn at your own speed 
          and build the expertise needed to enhance your career 
          </Text>
        </Flex>
      </Box>
    );
  };
//   mt={{ base: 4, md: 0 }}