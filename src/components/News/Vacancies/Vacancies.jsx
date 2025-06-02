import React from 'react';
import "./Vacancies.css";
import vacancies from "../../../../data/vacancies.json"

export const Vacancies = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <h1>OUR VACANCIES</h1>
      <div className="vacancies">
        {vacancies.vacancies.map((vacancy, index) => (
          <div key={index} className="vacancy">
            <h2>{vacancy.title}</h2>
            <h3>Vacancies : {vacancy.number}</h3>
            <p>{vacancy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
