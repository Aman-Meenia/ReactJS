import { ChevronRight, Map } from "lucide-react";

const MapPage = () => {
  return (
    <div className="w-full lg:w-5/12 pt-2">
      <div className="mb-4 flex  justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Nearby Locations
          </h2>
        </div>

        <div className="flex  justify-center items-center text-blue-500">
          View Map
          <ChevronRight size={16} />
        </div>
      </div>
      <div className="relative h-96 rounded-lg overflow-hidden border">
        <div className="h-full w-full bg-blue-50 flex items-center justify-center">
          <Map size={48} className="text-gray-400" />
          <div className="absolute inset-0">
            <img
              src="/image/map.png"
              alt="Map"
              className="h-full w-full object-cover opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
