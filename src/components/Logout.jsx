import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        <Link to="/">Logout</Link>
      </button>
    </div>
  );
}

export default Logout;
