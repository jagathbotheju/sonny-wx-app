import openai from "@/openai";
import { WxData } from "@/types";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { lat, long } = await request.json();

  if (lat && long) {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}1&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FLondon`
      )
      .then((res) => {
        const data: WxData = res.data;
        console.log(data);
        return NextResponse.json({ data });
      })
      .catch((err) => {
        //setError(error)
        console.log(err);
      });
  }
  return NextResponse.json({});
}
