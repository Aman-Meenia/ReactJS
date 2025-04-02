import { useState } from "react";
import HotelListing from "./components/HotelListing";
import MapPage from "./components/MapPage";

const App = () => {
  const [activeTab, setActiveTab] = useState<
    "Hotels" | "Restaurants" | "Places"
  >("Hotels");

  return (
    <div className="bg-[rgba(255,255,227)] min-h-screen w-full">
      <div className="max-w-7xl mx-auto p-4 font-sans ">
        <div className="flex flex-col lg:flex-row gap-6 ">
          <div className=" flex flex-col w-full lg:w-[70%] ">
            <div className="flex w-full justify-between pb-4">
              <div
                className={`px-2 sm:px-6 py-3 cursor-pointer flex-1 text-center pb-2 mx-1 sm:mx-2 ${
                  activeTab === "Hotels"
                    ? "border-b-2 border-red-500 text-red-500 font-medium"
                    : "border-b-2 border-[#C3D59B]"
                }`}
                onClick={() => setActiveTab("Hotels")}
              >
                Hotels
              </div>
              <div
                className={`px-2 sm:px-6 py-3 cursor-pointer flex-1 text-center pb-2 mx-1 sm:mx-2 ${
                  activeTab === "Restaurants"
                    ? "border-b-2 border-red-500 text-red-500 font-medium"
                    : "border-b-2 border-[#C3D59B]"
                }`}
                onClick={() => setActiveTab("Restaurants")}
              >
                Restaurants
              </div>
              <div
                className={`px-2 sm:px-6 py-3 cursor-pointer flex-1 text-center pb-2 mx-1 sm:mx-2 ${
                  activeTab === "Places"
                    ? "border-b-2 border-red-500 text-red-500 font-medium"
                    : "border-b-2 border-[#C3D59B]"
                }`}
                onClick={() => setActiveTab("Places")}
              >
                Places
              </div>
            </div>
            <HotelListing />
          </div>
          <MapPage />
        </div>
      </div>
    </div>
  );
};
export default App;
