
import { Box, Input, Avatar, HStack, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Profile = () => {
  const { isLogged } = useContext(AuthContext);
  const { colorMode } = useColorMode(); // Hook to get current color mode

  return (
    <Box
      w="100%"
      
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient={
        colorMode === "light"
          ? "linear-gradient(90deg, #008080, #00BFFF)" // Gradient for light mode
          : "linear-gradient(135deg, #3A6073, #16222A)" // Gradient for dark mode
      }
      color={colorMode === "light" ? "black" : "#FFFFFF"} // Text color based on mode
    >
      <Box p={8} borderRadius="md" shadow="md" textAlign="center">
        <h2>Profile</h2>
        <HStack spacing={4}>
          {/* Avatar with user initials or profile picture */}
          <Avatar name={isLogged.user} src={isLogged.avatarUrl} />
          <Input
            defaultValue={isLogged.user}
            variant="filled"
            focusBorderColor="blue.500"
            _placeholder={{ color: colorMode === "light" ? "gray.500" : "gray.200" }} // Placeholder color
          />
        </HStack>
      </Box>
    </Box>
  );
};




















// import { Box, Input } from "@chakra-ui/react";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// export const Profile = () => {
//   const { isLogged } = useContext(AuthContext);

//   return (
//     <Box>
//       <h2>Profile</h2>
//       <Input defaultValue={isLogged.user} />
//     </Box>
//   );
// };
