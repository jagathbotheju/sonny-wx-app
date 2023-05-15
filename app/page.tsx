"use client";
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394f68] to-[#183b7e] p-10 flex flex-col justify-center">
      <Card className="max-w-6xl mx-auto">
        <Text className="text-4xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Powered by GPT-4 Open AI, NextJs13.3, TailwindCSS, Tremor2.0 and
          More!...
        </Subtitle>

        <Divider className="my-10" />

        {/* city picker */}
        <Card className="bg-gradient-to-br from-[#394f68] to-[#183b7e]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
