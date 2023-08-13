import React from 'react';
import WeatherForecastCard from './WeatherForecastCard';

interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}

interface WeatherForecastListProps {
  data: {
    forecast?: {
      forecastday: DayForecast[];
    };
  };
}

const WeatherForecastList: React.FC<WeatherForecastListProps> = ({ data }) => {
  if (!data.forecast) {
    return null;
  }

  const currentDate = new Date();
  const currentDayIndex = data.forecast.forecastday.findIndex(
    (dayForecast) => dayForecast.date === currentDate.toISOString().split('T').shift()
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
      {data.forecast.forecastday.map((dayForecast, index) => (
        <WeatherForecastCard
          key={index}
          dayForecast={dayForecast}
          isCurrentDay={index === currentDayIndex}
        />
      ))}
    </div>
  );
};

export default WeatherForecastList;
