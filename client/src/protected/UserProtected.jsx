import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserProtected = ({ children }) => {
  const token = localStorage.getItem("token");
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
      localStorage.removeItem("token");
    }
    if (token) {
      (async () => {
        try {
          const result = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/users/profile`,
            {
              withCredentials: true,
            }
          );
          if (result?.data?.success && result?.data?.role === "user") {
            navigate("/home");
            setUser((prev) => {
              return {
                ...prev,
                email: result.data.data.email,
                fullName: result.data.data.fullName,
              };
            });
          } else {
            localStorage.removeItem("token");
            navigate("/login");
          }
        } catch (error) {
          console.log(error);
          navigate("/login");
        }
      })();
    }
  }, [token]);

  return <>{children}</>;
};

export default UserProtected;
