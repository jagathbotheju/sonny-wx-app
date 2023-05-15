import { WxData } from "@/types";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import CityPicker from "./CityPicker";
import { format } from "date-fns";
import weatherCodeToString from "@/lib/weatherCodeToString";
import Image from "next/image";
import { formatInTimeZone } from "date-fns-tz";

interface Props {
  city: string;
  results: WxData;
  lat: string;
  long: string;
}

const InformationPanel = ({ city, lat, long, results }: Props) => {
  const getCurrentTemp = () => {
    const datePart = format(new Date(), "yyyy-MM-dd");
    const timePart = format(new Date(), "hh:00");
    const timeString = `${datePart}T${timePart}`;
    const timeIndex = results.hourly.time.indexOf(timeString);
    const tempValue = results.hourly.temperature_2m[timeIndex];

    return `${tempValue} ${results.hourly_units.temperature_2m}`;
  };

  const getCurrentWeatherCode = () => {
    const datePart = format(new Date(), "yyyy-MM-dd");
    const timePart = format(new Date(), "hh:00");
    const timeString = `${datePart}T${timePart}`;
    const timeIndex = results.hourly.time.indexOf(timeString);
    const weatherCode = results.hourly.weathercode[timeIndex];
    const weatherCodeLabel = weatherCodeToString[weatherCode].label;
    const weatherCodeIcon = weatherCodeToString[weatherCode].icon;

    return {
      label: weatherCodeLabel,
      icon: weatherCodeIcon,
    };
  };

  return (
    <div className="bg-gradient-to-br from-[#394f68] to-[#183b7e] text-white p-10">
      <div className="bb-5">
        <h1 className="text-6xl font-bold">{city}</h1>
        <p className="text-xs text-gray-400">
          Lat/Long : {lat},{long}
        </p>
      </div>

      <CityPicker />

      <hr className="my-10" />
      <div className="mt-5 flex items-center justify-between space-x-1- mb-5 flex-col">
        {/* date */}
        <div>
          <p className="text-xl">{format(new Date(), "eeee,d MMMM, yyyy")}</p>
        </div>

        {/* time */}
        <div>
          <p className="text-xl font-bold uppercase">
            {format(new Date(), "hh : mm a")}
          </p>
        </div>
      </div>

      <hr className="mt-10 my-5" />

      <div className="flex items-center justify-between">
        <div>
          <Image
            src={getCurrentWeatherCode().icon}
            alt={`http://www.weatherbit.io/static/img/icons/${
              getCurrentWeatherCode().label
            }`}
            width={75}
            height={75}
          />

          <div className="flex items-center justify-center flex-col">
            <p className="text-6xl font-semibold">{getCurrentTemp()}</p>
            <p className="text-right text-lg font-light">
              {getCurrentWeatherCode().label}
            </p>
          </div>
        </div>
      </div>

      {/* sun rise and sun set */}
      <div className="flex items-center space-x-2 px-4 py-3 border border-[#6f90cd rounded-md bg-[#405885] mt-4">
        <SunIcon className="h-10 w-10 text-gray-400" />
        <div className="flex-1 flex justify-between items-center">
          <p className="font-light">Sunrise</p>
          <p className="uppercase text-2xl">
            {/* stopped last day */}
            {format(new Date(results.daily.sunrise[0]), "hh : mm bbb")}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 px-4 py-3 border border-[#6f90cd rounded-md bg-[#405885] mt-2">
        <SunIcon className="h-10 w-10 text-gray-400" />
        <div className="flex-1 flex justify-between items-center">
          <p className="font-light">Sunset</p>
          <p className="uppercase text-2xl">
            {/* stopped last day */}
            {format(new Date(results.daily.sunset[0]), "hh : mm bbb")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformationPanel;
