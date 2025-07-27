import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/NavBar";
import { useLocation } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const shouldShowNavbar = isLoggedIn && location.pathname !== "/login";

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Toaster position="top-right" />
      
      {shouldShowNavbar && <Navbar />} {/* ✅ Conditionally show Navbar */}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-job"
          element={
            <ProtectedRoute>
              <AddJobPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditJobPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
      </Routes>

    </div>
  );
}
export default App;
