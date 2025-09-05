import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtected = ({ children }) => {
  const token = localStorage.getItem("token");
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      localStorage.removeItem("token");
    }
    if (token) {
      (async () => {
        try {
          const result = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/captain/profile`,
            {
              withCredentials: true,
            }
          );
          console.log(result, "captain profile");

          if (result?.data?.success && result?.data?.role === "captain") {
            navigate("/captain-home");
            setUser((prev) => {
              return {
                ...prev,
                email: result.data.data.email,
                fullName: result.data.data.fullName,
              };
            });
          } else {
            localStorage.removeItem("token");
            navigate("/captain-login");
          }
        } catch (error) {
          console.log(error);
          navigate("/captain-login");
        }
      })();
    }
  }, [token]);

  return <>{children}</>;
};

export default CaptainProtected;
