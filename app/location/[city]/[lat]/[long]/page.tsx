"use client";
import CalloutCard from "@/components/CalloutCard";
import InformationPanel from "@/components/InformationPanel";
import StatCard from "@/components/StatCard";
import { WxData } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import TempChart from "@/components/TempChart";
import RainChart from "@/components/RainChart";

//ISR
export const revalidate = 60;

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

const WeatherPage = async ({ params: { city, lat, long } }: Props) => {
  //const wxData: WxData = weatherData_new;
  //const dataToSend = cleanData(wxData, city);
  const [wxData, setWxData] = useState<WxData | null>(null);

  useEffect(() => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}1&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FLondon`;

    axios
      .get(url)
      .then((res) => {
        const data: WxData = res.data;
        setWxData(data);
        console.log(data);
      })
      .catch((err) => {
        //setError(error)
        console.log(err);
      });
  }, [lat, long]);

  // if (!wxData) {
  //   return (
  //     <div className="flex flex-col min-h-screen md:flex-row">
  //       <h1 className="text-2xl font-bold">Weather Data Not Available</h1>
  //     </div>
  //   );
  // }

  //console.log(`city ${decodeURI(city)}`);

  return (
    <>
      {wxData && (
        <div className="flex flex-col min-h-screen md:flex-row">
          {/* info panel */}
          <InformationPanel
            city={`${decodeURI(city)}`}
            lat={lat}
            long={long}
            results={wxData}
          />

          <div className="flex-1 p-5 lg:p-10">
            <div className="p-5">
              <div className="pb-5">
                <h2 className="text-xl font-bold">Todays Overview</h2>
                <p className="text-sm text-gray-400">
                  Last Updated at :{" "}
                  {format(
                    new Date(wxData?.hourly?.time[0]),
                    "eeee d MMMM  yyyy, h a"
                  )}
                </p>
              </div>

              {/* callout card */}
              {/* <div className="m-2 mb-10">
            <CalloutCard message={"GPT - SUMMARY"} />
          </div> */}

              {/* stat cards */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
                <StatCard
                  title="Maximum Temperature"
                  metric={`${wxData?.daily.temperature_2m_max[0].toFixed(1)}`}
                  color="yellow"
                />
                <StatCard
                  title="Minimum Temperature"
                  metric={`${wxData?.daily.temperature_2m_min[0].toFixed(1)}`}
                  color="green"
                />

                <div>
                  <StatCard
                    title="UV Index"
                    metric={`${wxData?.daily.uv_index_max[0].toFixed(1)}`}
                    color="rose"
                  />
                  {Number(wxData?.daily.uv_index_max[0].toFixed(1)) > 5 && (
                    <CalloutCard
                      message="The UV is high today. Be sure to wear SPF!"
                      warning
                    />
                  )}
                </div>

                {/* wind */}
                <div className="flex space-x-3">
                  <StatCard
                    title="Wind Speed"
                    metric={`${wxData?.daily.windspeed_10m_max[0].toFixed(1)}`}
                    color="cyan"
                  />
                  <StatCard
                    title="Wind Direction"
                    metric={`${wxData?.daily.winddirection_10m_dominant[0].toFixed(
                      1
                    )}`}
                    color="violet"
                  />
                </div>
              </div>
            </div>

            <hr className="mb-5" />

            <div className="space-y-3">
              <TempChart results={wxData} />
              <RainChart results={wxData} />
              {/* HumidityChart */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherPage;
