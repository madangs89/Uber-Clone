import React from "react";

const LocationSeachPanel = ({ vehiclePanel, setVehiclePanel }) => {
  const sampleLocations = [
    {
      name: "New York City Metropolitan Area Downtown Manhattan",
      coordinates: { lat: 40.7128, lng: -74.006 },
    },
    {
      name: "Los Angeles Greater Area Hollywood Boulevard District",
      coordinates: { lat: 34.0522, lng: -118.2437 },
    },
    {
      name: "San Francisco Bay Area Golden Gate Bridge",
      coordinates: { lat: 37.7749, lng: -122.4194 },
    },
    {
      name: "Miami South Beach Ocean Drive Art Deco District",
      coordinates: { lat: 25.7617, lng: -80.1918 },
    },
    {
      name: "Chicago Downtown Magnificent Mile Millennium Park",
      coordinates: { lat: 41.8781, lng: -87.6298 },
    },
    {
      name: "Houston Galleria Uptown Museum District Area",
      coordinates: { lat: 29.7604, lng: -95.3698 },
    },
    {
      name: "Seattle Downtown Pike Place Market Waterfront",
      coordinates: { lat: 47.6062, lng: -122.3321 },
    },
    {
      name: "Boston Back Bay Beacon Hill Charles River Esplanade",
      coordinates: { lat: 42.3601, lng: -71.0589 },
    },
    {
      name: "Dallas Arts District Deep Ellum Uptown Victory Park",
      coordinates: { lat: 32.7767, lng: -96.797 },
    },
    {
      name: "Atlanta Midtown Buckhead Downtown Centennial Olympic Park",
      coordinates: { lat: 33.749, lng: -84.388 },
    },
  ];
  return (
    <div className="overflow-y-scroll h-screen pb-5">
      {sampleLocations.map((location , index) => (
        <div
          key={index}  
          onClick={() => setVehiclePanel(true)}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSeachPanel;
