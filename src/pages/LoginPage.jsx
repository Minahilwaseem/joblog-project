import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import toast from "react-hot-toast";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault(); // ✅ Prevent form reload

    if (!validate()) return; // ✅ Validate before proceeding

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
   // localStorage.setItem("email", setEmail); // user.email should be from login response


    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Invalid credentials");
    }
  };
  localStorage.setItem("email", setEmail); // user.email should be from login response


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-blue-700 text-2xl  mb-4 text-center font-bold">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-1 border border-gray-300 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-1 border border-gray-300 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password}</p>}

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 mt-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-700 hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
