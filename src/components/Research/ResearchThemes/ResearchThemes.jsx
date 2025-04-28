import React, { useState } from 'react';
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
  },
  {
    link: "#",
    title: "AI-Driven Biosensors for Real-Time Diagnostics",
    fundingAgency: "IIT Madras",
    startYear: 2024,
    endYear: 2026
  }
];

const ResearchTable = ({ data }) => (
  <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Sno.</th>
          <th>Title of the Project</th>
          <th>Funding Agency</th>
          <th>Duration</th>
          <th>Read More</th>
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
  const [activeTab, setActiveTab] = useState('ongoing');

  const currentYear = new Date().getFullYear();
  const OngoingResearchData = researchData.filter(item => item.endYear >= currentYear);
  const CompletedResearchData = researchData.filter(item => item.endYear < currentYear);

  return (
    <div className="research-container">
      <h2 id="currentTheme">Research Themes</h2>

      <div className="tabs">
        <button
          className={activeTab === 'ongoing' ? 'active' : ''}
          onClick={() => setActiveTab('ongoing')}
        >
          Ongoing
        </button>
        <button
          className={activeTab === 'completed' ? 'active' : ''}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'ongoing' ? (
          OngoingResearchData.length > 0 ? (
            <ResearchTable data={OngoingResearchData} />
          ) : (
            <p className="no-data">No ongoing research projects.</p>
          )
        ) : (
          CompletedResearchData.length > 0 ? (
            <ResearchTable data={CompletedResearchData} />
          ) : (
            <p className="no-data">No completed research projects.</p>
          )
        )}
      </div>
    </div>
  );
};
