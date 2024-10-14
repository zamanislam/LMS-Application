import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoute";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";


function AppContent() {
  const location = useLocation();

  const noFooterPaths = ["/adminLogin", "/analytic", "/lectures"];

  return (
    <>
      <Navbar />
      <AppRoutes />

      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;