"use client";
import { WxData } from "@/types";
import { AreaChart, Card, Title } from "@tremor/react";

type Props = {
  results: WxData;
};

const RainChart = ({ results }: Props) => {
  const hourly = results?.hourly.time.slice(0, 24).map((time) =>
    new Date(time).toLocaleString("en-US", {
      hour: "numeric",
      hour12: false,
    })
  );

  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "Rain (%)": results.hourly.precipitation_probability[i],
  }));

  const dataFormatter = (number: number) => `${number} %`;

  return (
    <Card>
      <Title>Rain Forecast</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showAnimation
        showLegend
        index="time"
        categories={["Rain (%)"]}
        minValue={0}
        maxValue={100}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
        curveType="natural"
        colors={["blue"]}
      />
    </Card>
  );
};

export default RainChart;
