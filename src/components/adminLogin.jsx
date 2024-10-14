import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/footer";
import {
  Box,
  Input,
  Button,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

export function AdminLogin() {
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false); // State for triggering popup
  const [errorMsg, setErrorMsg] = useState("");
  const cancelRef = useRef(); // For AlertDialog focus
  const navigate = useNavigate();


  const ADMIN_PASSWORD = "admin123"; 

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      navigate("/admin"); 
    } else {
      setErrorMsg("Only admins can view this page!");
      setIsError(true); // Trigger the popup
      setTimeout(() => {
        navigate("/"); // Redirect to home page after 3 seconds
      }, 3000);
    }
  };

  return (
    <>
    <Box mt={12} textAlign="center">
      <Text fontSize="2xl" mb={4}>
        Admin Login
      </Text>
      <Input
        type="password"
        placeholder="Enter Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        width="300px"
        mb={4}
      />
      <Button onClick={handleLogin}>Login</Button>

      {/* Popup for incorrect admin access */}
      <AlertDialog
        isOpen={isError}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsError(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Access Denied
            </AlertDialogHeader>

            <AlertDialogBody>{errorMsg}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setIsError(false)}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
    
    </>
  );
}