import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import LoadingTailwind from "../components/LoadingTailwind";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(data.data);
      console.log(data.status);

      if (data?.data?.success) {
        setUser((prev) => {
          return {
            ...prev,
            email: data.data.data.email,
            fullName: data.data.data.fullName,
          };
        });
        localStorage.setItem("token", data.data.data.token);
        setLoading(false);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            name="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="password"
          />

          <button
            type="submit"
            className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
          >
            {loading ? <LoadingTailwind /> : "Login"}
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Login in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
