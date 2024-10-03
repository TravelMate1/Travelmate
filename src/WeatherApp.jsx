import Searchbox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Mumbai",
    feelsLike: 24.55,
    temp: 25.55,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 48,
    weather: "haze",
  });

  let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  };

  return (
    <>
      <div className="app" style={{ textAlign: "center" }}>
        <h2>Weather APP</h2>
        <Searchbox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
      <hr />
      <ul className="example-2">
        <li className="icon-content">
          <a
            href="https://www.linkedin.com/in/chetan137/"
            aria-label="LinkedIn"
            data-social="linkedin"
          >
            <div className="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <div className="tooltip">LinkedIn</div>
        </li>
        <li className="icon-content">
          <a
            href="https://github.com/chetan137"
            aria-label="GitHub"
            data-social="github"
          >
            <div className="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <div className="tooltip">GitHub</div>
        </li>
        <li className="icon-content">
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            data-social="instagram"
          >
            <div className="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.52 2.52 0 0 1-.919-.598 2.51 2.51 0 0 1-.598-.92c-.11-.281-.24-.704-.276-1.485-.038-.843-.046-1.096-.046-3.232 0-2.136.008-2.389.046-3.232.036-.78.166-1.204.276-1.485.144-.374.318-.64.598-.92.28-.28.546-.453.919-.599.282-.11.705-.24 1.485-.275.844-.039 1.097-.046 3.233-.046zm0 1.442a6.56 6.56 0 0 0-.709.032c-.704.033-1.087.15-1.34.249-.337.131-.579.288-.835.543-.255.256-.412.498-.543.836-.099.253-.216.636-.249 1.34-.032.703-.03.918-.03 2.724s-.003 2.022.03 2.725c.033.704.15 1.087.249 1.34.131.337.288.579.543.835.256.255.498.412.835.543.253.099.636.216 1.34.249.703.032.918.03 2.725.03 1.807 0 2.022.003 2.724-.03.704-.033 1.087-.15 1.34-.249.337-.131.579-.288.835-.543.255-.256.412-.498.543-.835.099-.253.216-.636.249-1.34.032-.703.03-.918.03-2.725 0-1.807.003-2.022-.03-2.724-.033-.704-.15-1.087-.249-1.34a2.12 2.12 0 0 0-.543-.835 2.117 2.117 0 0 0-.835-.543c-.253-.099-.636-.216-1.34-.249-.703-.032-.918-.03-2.724-.03s-2.022-.003-2.725.03zM8 3.891A4.109 4.109 0 1 0 8 12.109 4.109 4.109 0 0 0 8 3.891zm0 1.443a2.666 2.666 0 1 1 0 5.333 2.666 2.666 0 0 1 0-5.333zm5.271-.958a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <div className="tooltip">Instagram</div>
        </li>
      </ul>
    </>
  );
}
