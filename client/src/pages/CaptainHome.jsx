import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const ridePopupPanelRef = useRef(null);
  const confirmridePopupPanelRef = useRef(null);
  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(0%)",
        duration: 0.4,
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(100%)",
        duration: 0.4,
      });
    }
  }, [ridePopupPanel]);
  useGSAP(() => {
    if (confirmRidePopupPanel) {
      gsap.to(confirmridePopupPanelRef.current, {
        transform: "translateY(0%)",
        duration: 0.4,
      });
    } else {
      gsap.to(confirmridePopupPanelRef.current, {
        transform: "translateY(100%)",
        duration: 0.4,
      });
    }
  }, [confirmRidePopupPanel]);
  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-18"
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
      <div className="h-3/5">
        {/* <LiveTracking /> */}
        <img
          className="w-full h-full object-cover"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1313,h_1313,c_limit/GoogleMapTA.jpg"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopupPanelRef}
        className="fixed z-[9999] translate-y-full bg-white w-full p-5 bottom-0"
      >
        <RidePopup
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
      <div
        ref={confirmridePopupPanelRef}
        className="fixed z-[9999] h-screen translate-y-full bg-white w-full p-5 bottom-0"
      >
        <ConfirmRidePopup
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
