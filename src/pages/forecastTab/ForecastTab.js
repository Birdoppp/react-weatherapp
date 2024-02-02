import React , { useEffect, useState, useContext }from 'react';
import './ForecastTab.css';
import {TempContext} from "../../Context/TempProvider";

function ForecastTab()

{const { kelvinToMetric } = useContext(TempContext);

  return (
    <div className="tab-wrapper">
      <article className="forecast-day">
        <p className="day-description">
          Maandag
        </p>

        <section className="forecast-weather">
            <span>
                {kelvinToMetric(forecast.temp.day)}
              12&deg; C
            </span>
          <span className="weather-description">
              Licht Bewolkt
            </span>
        </section>
      </article>

      <article className="forecast-day">
        <p className="day-description">
          Maandag
        </p>

        <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
          <span className="weather-description">
              Licht Bewolkt
            </span>
        </section>
      </article>

      <article className="forecast-day">
        <p className="day-description">
          Maandag
        </p>

        <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
          <span className="weather-description">
              Licht Bewolkt
            </span>
        </section>
      </article>

      <article className="forecast-day">
        <p className="day-description">
          Maandag
        </p>

        <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
          <span className="weather-description">
              Licht Bewolkt
            </span>
        </section>
      </article>

      <article className="forecast-day">
        <p className="day-description">
          Maandag
        </p>

        <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
          <span className="weather-description">
              Licht Bewolkt
            </span>
        </section>
      </article>
    </div>
  );
};

export default ForecastTab;
