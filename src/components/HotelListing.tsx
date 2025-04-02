import { hotels } from "@/types/Hotel";
import { ArrowRight } from "lucide-react";

const HotelListing = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-gray-800">POPULAR HOTELS</h2>
        <button className="flex items-center text-blue-500 text-sm font-medium">
          Explore
          <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <div className="w-full sm:w-1/4 h-40 sm:h-auto sm:min-w-[80px]">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-full w-full object-contain sm:rounded-l-lg rounded-t-lg sm:rounded-t-none"
              />
            </div>

            <div className="flex-1 p-3 sm:p-2 flex flex-col sm:flex-row">
              <div className="flex-1 flex flex-col justify-center mb-3 sm:mb-0">
                <h3 className="text-base font-medium text-gray-800 mb-1 sm:mb-0.5">
                  {hotel.name}
                </h3>

                <div className="flex items-center mb-1 sm:mb-0.5 sm:flex-wrap">
                  <img
                    src="/image/location.png"
                    alt="Location"
                    className="h-4 w-4"
                  />
                  <span className="ml-1 text-xs text-gray-700">
                    {hotel.location}
                  </span>

                  <img
                    src="/image/car.png"
                    className="h-4 w-4 ml-2 hidden sm:block"
                    alt="Distance"
                  />
                  {hotel.isVerified && (
                    <div className="ml-1 hidden sm:block">
                      <img
                        src="/image/Tick.png"
                        className="h-4 w-4"
                        alt="Verified"
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-center mb-1 sm:hidden">
                  <img
                    src="/image/car.png"
                    alt="Distance"
                    className="h-4 w-4"
                  />
                  <span className="ml-1 text-xs text-gray-700">
                    3.2 km from center
                  </span>
                </div>

                {hotel.isVerified && (
                  <div className="flex items-center mb-1 sm:hidden">
                    <img
                      src="/image/Tick.png"
                      alt="Verified"
                      className="h-4 w-4"
                    />
                    <span className="ml-1 text-xs text-gray-700">
                      Verified property
                    </span>
                  </div>
                )}

                <div className="flex items-center">
                  <div className="flex items-center">
                    <img
                      src="/image/Star.png"
                      className="h-4 w-4"
                      alt="Rating"
                    />
                    <span className="ml-0.5 text-sm">{hotel.rating}</span>
                  </div>
                  <div className="ml-2 flex items-center">
                    <img
                      src="/image/reviews.png"
                      className="h-4 w-4"
                      alt="Reviews"
                    />
                    <span className="ml-0.5 text-xs text-gray-700">
                      {(hotel.reviews / 1000).toFixed(1)}K
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-end mt-3 pt-3 border-t border-gray-100 sm:border-0 sm:mt-0 sm:pt-0">
                <div className="text-left sm:text-right sm:mb-1">
                  <div className="text-lg sm:text-xl font-bold">
                    ₹{hotel.price}
                  </div>
                  <div className="text-xs text-gray-500">/night</div>
                </div>
                <div className="sm:flex sm:justify-end">
                  <button className="px-3 py-1.5 sm:px-2 sm:py-1 bg-white text-pink-600 border border-pink-600 rounded-full text-xs font-medium hover:bg-pink-50">
                    Check now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelListing;
