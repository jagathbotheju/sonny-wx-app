const weatherCodeToString: {
  [key: number]: {
    icon: string;
    label: string;
  };
} = {
  0: {
    icon: "/images/clear-sky.png",
    label: "Clear sky",
  },
  1: {
    icon: "/images/clear-sky.png",
    label: "Mainly clear",
  },
  2: {
    icon: "/images/cloudy.png",
    label: "Partly cloudy",
  },
  3: {
    icon: "/images/overcast.png",
    label: "Overcast",
  },
  45: {
    icon: "/images/fog.png",
    label: "Fog",
  },
  48: {
    icon: "/images/fog.png",
    label: "Depositing rime fog",
  },
  51: {
    icon: "/images/drizzle.png",
    label: "Drizzle",
  },
  53: {
    icon: "/images/drizzle.png",
    label: "Drizzle",
  },
  55: {
    icon: "/images/drizzle.png",
    label: "Drizzle",
  },
  56: {
    icon: "/images/freezing-drizzle.png",
    label: "Freezing Drizzle",
  },
  57: {
    icon: "/images/freezing-drizzle.png",
    label: "Freezing Drizzle",
  },
  61: {
    icon: "/images/raining.png",
    label: "Rain",
  },
  63: {
    icon: "/images/raining.png",
    label: "Rain",
  },
  65: {
    icon: "/images/raining.png",
    label: "Rain",
  },
  66: {
    icon: "/images/raining.png",
    label: "Freezing Rain",
  },
  67: {
    icon: "/images/raining.png",
    label: "Freezing Rain",
  },
  71: {
    icon: "/images/snow.png",
    label: "Snow",
  },
  73: {
    icon: "/images/snow.png",
    label: "Snow",
  },
  75: {
    icon: "/images/snow.png",
    label: "Snow",
  },
  77: {
    icon: "/images/snow.png",
    label: "Snow grains",
  },
  80: {
    icon: "/images/rain-showers.png",
    label: "Rain showers",
  },
  81: {
    icon: "/images/rain-showers.png",
    label: "Rain showers",
  },
  82: {
    icon: "/images/rain-showers.png",
    label: "Rain showers",
  },
  85: {
    icon: "/images/snow.png",
    label: "Snow showers",
  },
  86: {
    icon: "/images/snow.png",
    label: "Snow showers",
  },
  95: {
    icon: "/images/thunderstorm.png",
    label: "Thunderstorm",
  },
  96: {
    icon: "/images/thunderstorm.png",
    label: "Thunderstorm",
  },
  99: {
    icon: "/images/thunderstorm.png",
    label: "Thunderstorm",
  },
};

export default weatherCodeToString;
