import GoogleMapReact  from "google-map-react";
console.log(import.meta.env.VITE_REACT_MAP_API,"opp");

export default function GoogleMap() {
  return (
    <div className="w-full h-full md:h-[20rem] bg-slate-900/80 flex flex-col md:flex-row ">
      <div className="w-full h-full md:w-1/2 md:p-20 p-10">
        <h3 className="text-xl font-semibold">Our Address</h3>
        <p>Sacrosys Technologies</p>
        <p>
          PB No. 41755, Saleha Khalifa Bldg, Al Muteena, Diera, Dubai, United
          Arab
        </p>
        <p>Emirates Phone: +971 50 8493100, +971 52 99 77 626 e-mail:</p>
        <p>info@sacrosys.com</p>
      </div>
      <div className="w-full h-full md:w-1/2 md:p-20 p-10">
        <div className="w-[96] h-full rounded-lg">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: import.meta.env.VITE_REACT_MAP_API,
            }}
            defaultCenter={{ lat: 25.274010, lng: 55.322317 }}
            defaultZoom={11}
          />
        </div>
      </div>
    </div>
  );
}
