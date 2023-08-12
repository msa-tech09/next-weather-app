import React from 'react';

interface WeatherForecastCardProps {
  dayForecast: {
    date: string;
    day: {
      condition: {
        icon: string;
        text: string;
      };
      maxtemp_c: number;
      mintemp_c: number;
    };
  };
  isCurrentDay: boolean;
}

const WeatherForecastCard: React.FC<WeatherForecastCardProps> = ({ dayForecast, isCurrentDay }) => {
  const { date, day } = dayForecast;
  const { icon, text } = day.condition;
  const maxTempCelsius = day.maxtemp_c.toFixed();
  const minTempCelsius = day.mintemp_c.toFixed();

  return (
    <div
      className={`bg-white/30 p-2 text-center rounded-lg flex flex-col items-center font-semibold gap-4 ${isCurrentDay ? 'bg-blue-500' : ''}`}
      role="group"
    >
      <p className="italic text-2xl">{new Date(date).toLocaleString('en', { weekday: 'short' })}</p>
      <img className="w-50 h-50" src={icon} alt={text} aria-label={text} />
      <div>
        <p className="bg-black/25 px-2 italic rounded-lg text-white mb-2">
          High: <span aria-label={`Maximum temperature: ${maxTempCelsius} degrees Celsius`}>{maxTempCelsius}°C</span>
        </p>
        <p className="bg-black/25 px-2 italic rounded-lg text-white">
          Low: <span aria-label={`Minimum temperature: ${minTempCelsius} degrees Celsius`}>{minTempCelsius}°C</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherForecastCard;
