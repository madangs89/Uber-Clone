import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setfinishRidePanel] = useState(false);
  const finishRidePanelRel = useRef(null);
  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRel.current, {
        transform: "translateY(0%)",
        duration: 0.4,
      });
    } else {
      gsap.to(finishRidePanelRel.current, {
        transform: "translateY(100%)",
        duration: 0.4,
      });
    }
  }, [finishRidePanel]);
  return (
    <div className="h-screen relative">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-24"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        {/* <LiveTracking /> */}
        <img
          className="w-full h-full object-cover"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1313,h_1313,c_limit/GoogleMapTA.jpg"
          alt=""
        />
      </div>
      <div
        className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10"
        onClick={() => {
          setfinishRidePanel(true);
        }}
      >
        <h5
          className="p-1 text-center w-[90%] absolute top-0"
          onClick={() => {}}
        >
          <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">{"4 KM away"}</h4>
        <button className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRel}
        className="fixed z-[9999] h-screen translate-y-full bg-white w-full p-5 bottom-0"
      >
        <FinishRide setfinishRidePanel={setfinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
