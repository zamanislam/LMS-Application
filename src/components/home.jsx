import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <Box textAlign="center" p={5}>
      {/* Welcome Message */}
      <Text fontSize="3xl" fontWeight="bold" lg={8}>
        Welcome!! to the LMS
      </Text>
      <Text fontSize="2xl" lg={8} color="teal">
      "Welcome to LMS! Whether you're passionate about Frontend, Backend, or Data Analytics, 
      our platform offers comprehensive courses to help you master the skills needed for success. From building dynamic user interfaces to developing robust server-side applications and unlocking 
      insights from data, we provide the tools and knowledge to accelerate your journey in tech."
      </Text>


      {/* Image and Descriptions */}
      <VStack spacing={10} align="center">
        <Box boxShadow='lg' p='6' rounded='md' bg='lightblue'mt="10">
        <Text fontSize="lg" fontWeight="semibold" mt={4}>
            Frontend Development
          </Text>
          <Image
            src="https://images.unsplash.com/photo-1549082984-1323b94df9a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&
            ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyb250ZW5kJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww"
            alt="Frontend"
            
            borderRadius="md"
            boxShadow="lg"
          />
          
          <Text fontSize="md" color="gray.600" textAlign="center">
            
            Dive into creating interactive and responsive web <br/>interfaces with HTML, CSS, JavaScript, and popular frameworks like React.
          </Text>
        </Box>

        <Box boxShadow='lg' p='6' rounded='md' bg='lightblue'>
        <Text fontSize="lg" fontWeight="semibold" mt={4}>
            Backend Development
          </Text>
          <Image
            src="https://media.istockphoto.com/id/1442990991/photo/programmer-coding-and-communication-with-team-at-computer-for-project-software-discussion.webp?a=1&b=1&s=612x612&w=0&k=20&c=O4jizyGLQ_06KcRvkYwk-px8lL4Fc0bhvaL04gAGQ9o="
            alt="Backend"
            borderRadius="md"
            boxShadow="lg"
          />
         
          <Text fontSize="md" color="gray.600" textAlign="center">
            Explore server-side technologies and APIs.<br/>
            Learn the fundamentals of server-side programming,<br/> databases, and API development using technologies such 
            as Node.js, Python, <br/>and databases like MongoDB and SQL.
          </Text>
        </Box>

        <Box boxShadow='lg' p='6' rounded='md' bg='navyblue'>
        <Text fontSize="lg" fontWeight="semibold" mt={4}>
            Data Analytics
          </Text>
          <Image
            src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=IWQzVeh6--ZOe9YxB1-EI1KSWooYTpZS2sqe6Zu6GJM="
            alt="Data Analytics"
            borderRadius="md"
            boxShadow="lg"
          />
         
          <Text fontSize="md" color="gray.600" textAlign="center">
            Analyze and visualize data to make informed decisions.<br/>
            Master the art of analyzing data, generating insights, and <br/>using tools like Python,
             Excel, and visualization libraries<br/>to make data-driven decisions.
          </Text>
        </Box>
      </VStack>

     
    </Box>
   
    </>
  );
};