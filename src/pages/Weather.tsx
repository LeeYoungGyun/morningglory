import axios from "axios";
import Navigation from "../component/Navigation";
import { useEffect, useState } from "react";

interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
}

interface ForecastResponse {
  city: {
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
  };
  list: ForecastItem[];
}

const Weather = () => {
  const url = "https://api.openweathermap.org/data/2.5/forecast?lat=37.4767&lon=126.9816&appid=9e8910521052276523853e592f94d691&units=metric";

  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const callWeatherApi = useEffect(() => {
    axios.get(url).then((res) => {
      if (res.status === 200 ) {
        setForecast(res.data);
      }
    });
  }, []);

   return (
    <>
      <Navigation />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">🕒 시간대별 날씨 예보</h2>
        {forecast ? (
          <div>
            <p className="text-lg font-semibold mb-2">📍 지역: {forecast.city.name}</p>
            {forecast.list.map((item, index) => (
              <div key={index} className="border p-4 mb-4 rounded-lg shadow-sm">
                <p>🕒 {item.dt_txt}</p>
                <p>🌡️ 온도: {item.main.temp}°C / 체감: {item.main.feels_like}°C</p>
                <p>🌤️ 날씨: {item.weather[0].main} ({item.weather[0].description})</p>
                <p>💨 바람: {item.wind.speed}m/s</p>
              </div>
            ))}
          </div>
        ) : (
          <p>날씨 정보를 불러오는 중...</p>
        )}
      </div>
    </>
   );
  };
  
  export default Weather;