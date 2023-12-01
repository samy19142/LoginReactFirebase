import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { AuthProvider } from "./context/authContext/";
import { ProtectedRoute } from "./components/ProtectedRoute";
import NavbarComponent from "./components/NavbarComponent";
import { Container } from "react-bootstrap";

function App() {
  return (
    <AuthProvider>
      <Container>
        <NavbarComponent />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </AuthProvider>
  );
}

export default App;
