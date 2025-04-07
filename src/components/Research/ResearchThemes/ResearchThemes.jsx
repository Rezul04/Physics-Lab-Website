import React from 'react';
import './ResearchThemes.css';

const researchData = [
  {
    link: "#",
    title: "Development of Surface Enhanced Raman Scattering (SERS) based Biosensor for Rapid Detection of oligonucleotides",
    fundingAgency: "DTU",
    startYear: 2020,
    endYear: 2024
  },
  {
    link: "#",
    title: "Indian Nanoelectronics Users Program - Idea to Innovation (INUP-i2i)",
    fundingAgency: "IITD (Delhi), Delhi, India",
    startYear: 2021,
    endYear: 2024
  },
  {
    link: "#",
    title: "Ag Nanorods based Flexible Wearable Dry Electrodes for Long-Term EEG Monitoring (FIRP Project 2021)",
    fundingAgency: "DTU",
    startYear: 2023,
    endYear: 2024
  }
];

const ResearchTable = ({ title, data }) => (
  <div className="table-container">
    <div className="tableTitle">
      <h2>{title}</h2>
    </div>
    <table>
      <thead>
        <tr>
          <th>Sno.</th>
          <th>Title of the project</th>
          <th>Funding Agency</th>
          <th>Duration</th>
          <th>Read more</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.fundingAgency}</td>
            <td>{item.startYear} - {item.endYear}</td>
            <td><a href={item.link} target="_blank" rel="noopener noreferrer">here</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const ResearchThemes = () => {
  // Separate or duplicate data if needed
  const OngoingResearchData = researchData;
  const CompletedResearchData = researchData; // Replace with actual completed research if available

  return (
    <>
      <ResearchTable title="Ongoing" data={OngoingResearchData} />
      <ResearchTable title="Completed" data={CompletedResearchData} />
    </>
  );
};
