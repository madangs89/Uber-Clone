import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="h-screen pt-5 bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==)] flex justify-between flex-col w-full">
        <img
          className="w-24 ml-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png "
          alt=""
        />
        <div className="px-5  bg-white py-10">
          <h1 className="text-2xl font-bold">Get Started With Uber</h1>
          <Link
            to="/login"
            className="bg-black cursor-pointer flex items-center justify-center mt-4 text-white py-3 px-4 w-full rounded"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
