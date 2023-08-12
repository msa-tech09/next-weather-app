interface WeatherDetailsProps {
  data: {
    current?: {
      wind_mph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_f: number;
      vis_km: number;
    };
    forecast?: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

interface WeatherCardDetails {
  title: string;
  content: string;
  ariaLabel: string;
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  if (!data.current) {
    return null;
  }

  const tempCelsius = ((data.current.feelslike_f - 32) * 5 / 9).toFixed();

  const details: WeatherCardDetails[] = [
    {
      title: "Wind Speed",
      content: `${data.current.wind_mph} mph`,
      ariaLabel: `Wind Speed: ${data.current.wind_mph} mph`,
    },
    {
      title: "Humidity",
      content: `${data.current.humidity}%`,
      ariaLabel: `Humidity: ${data.current.humidity}%`,
    },
    {
      title: "Air Pressure",
      content: `${data.current.pressure_mb} hPa`,
      ariaLabel: `Air Pressure: ${data.current.pressure_mb} hPa`,
    },
    {
      title: "Wind Direction",
      content: `${data.current.wind_dir}`,
      ariaLabel: `Wind Direction: ${data.current.wind_dir}`,
    },
    {
      title: "Visibility",
      content: `${data.current.vis_km} km`,
      ariaLabel: `Visibility: ${data.current.vis_km} km`,
    },
    {
      title: "Sunrise",
      content: `${data.forecast?.forecastday[0]?.astro.sunrise}`,
      ariaLabel: `Sunrise: ${data.forecast?.forecastday[0]?.astro.sunrise}`,
    },
    {
      title: "Sunset",
      content: `${data.forecast?.forecastday[0]?.astro.sunset}`,
      ariaLabel: `Sunset: ${data.forecast?.forecastday[0]?.astro.sunset}`,
    },
  ];

  return (
    <div className="p-12">
      <h1 className="mb-4 text-2xl text-white italic font-bold">Weather Details</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center italic font-bold">
        {details.map((detail, index) => (
          <div key={index} className="bg-white/30 flex p-4 items-center justify-center gap-6 rounded-lg">
            <div className="text-2xl">
              <h3>{detail.title}</h3>
              <h3 className="text-white bg-black/25 rounded-lg mt-1" aria-label={detail.ariaLabel}>
                {detail.content}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
