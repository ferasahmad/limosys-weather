import Clear from "../assets/images/weather-icons/clear.png";
import FewClouds from "../assets/images/weather-icons/few-clouds.png";
import Mist from "../assets/images/weather-icons/mist.png";
import Rain from "../assets/images/weather-icons/rain.png";
import ScatteredClouds from "../assets/images/weather-icons/scattered-clouds.png";
import ShowerRain from "../assets/images/weather-icons/shower-rain.png";
import Snow from "../assets/images/weather-icons/snow.png";
import ThunderStorm from "../assets/images/weather-icons/thunderstorm.png";

export const returnWeatherIcon = (weatherId) => {
  if(weatherId === 800) {
    return Clear
  } else if (weatherId === 801) {
    return FewClouds
  } else if (weatherId >= 200 && weatherId <= 232) {
    return ThunderStorm
  } else if (weatherId >= 300 && weatherId <= 321) {
    return Rain
  } else if (weatherId >= 500 && weatherId <= 531) {
    return ShowerRain
  } else if (weatherId >= 600 && weatherId <= 622) {
    return Snow
  } else if (weatherId >= 701 && weatherId <= 781) {
    return Mist
  } else if (weatherId >= 802 && weatherId <= 804	) {
    return ScatteredClouds
  }
}