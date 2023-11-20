import React from "react";

const Weather = ({ weatherData }) => {
  return (
    <div>
      {weatherData.weather ? (
        <div className="w-[500px] h-[250px] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%]">
          <div className="flex justify-between w-full">
            <div className="flex items-center justify-between w-1/2 mx-auto my-4">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className="text-xl">
                    {weatherData.name},{weatherData.sys.country}
                  </p>

                  <p className="text-sm">
                    {weatherData.weather[0].description}
                  </p>
                </div>
                <div>
                  <h1 className="text-6xl font-semibold">
                    {weatherData.main.temp.toFixed()} C°
                  </h1>
                </div>
              </div>

            </div>

            <div className="flex items-end justify-between w-1/2-col">
              
              <div className="relative">
              <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt="" className="w-[120px]"
                  />
              </div>

              
              {weatherData.name !== undefined ? (
                <div className="flex flex-col mx-auto my-4 text-xs justify-evenly gap-y-2">
                  <div className="flex justify-between gap-x-8">
                      <p>Feels Like</p>
                      <p className="w-20 font-bold">
                        {weatherData.main.feels_like.toFixed()} °C
                      </p>
                  </div>
                  <div className="flex justify-between gap-x-8">
                      <p>Humidity</p>
                      <p className="w-20 font-bold">
                        {weatherData.main.humidity} %
                      </p>
                  </div>
                  <div className="flex justify-between gap-x-8">
                      <p>Wind Speed</p>
                      <p className="w-20 font-bold">
                        {weatherData.wind.speed.toFixed()} KPH
                      </p>
                  </div>
                  <div className="flex justify-between gap-x-8">
                      <p>Pressure</p>
                      <p className="w-20 font-bold">
                        {weatherData.main.pressure} hPa
                      </p>
                  </div>
                  
                </div>
              ): null}
            </div>
            
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;