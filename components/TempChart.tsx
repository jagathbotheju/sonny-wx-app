"use client";
import { WxData } from "@/types";
import { AreaChart, Card, Title } from "@tremor/react";

type Props = {
  results: WxData;
};

const TempChart = ({ results }: Props) => {
  const hourly = results?.hourly.time.slice(0, 24).map((time) =>
    new Date(time).toLocaleString("en-US", {
      hour: "numeric",
      hour12: false,
    })
  );

  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "Temperature (C)": results.hourly.temperature_2m[i],
    "Humidity (%)": results.hourly.relativehumidity_2m[i],
  }));

  const dataFormatter = (number: number) => `${number}`;

  return (
    <Card>
      <Title>Temperature & Humidity</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showAnimation
        showLegend
        index="time"
        categories={["Temperature (C)", "Humidity (%)"]}
        minValue={0}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
        curveType="natural"
        colors={["yellow", "rose"]}
      />
    </Card>
  );
};

export default TempChart;
