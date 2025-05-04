import React, { useState } from 'react';
import './ResearchThemes.css';

const researchData = [
  {
    link: "#",
    title: "Mechanical Energy Harvesting using MXene Functionalized Polymer Composite Nanofibers and Integrating it with Energy Storage Devices for IoT and Wearable Applications, SERB-SURE, 30 Lakhs (2023-2025).",
    fundingAgency: "DTU",
    startYear: 2023,
    endYear: ''
  },
  {
    link: "#",
    title: "Tapping solar, wind and human energy; a hybrid photovoltaic/piezoelectric device based on 2D materials and their van der Waals heterostructures, UGC-Start Up Grant, 10 Lakhs (2018-2020).",
    fundingAgency: "DTU",
    startYear: 2018,
    endYear: 2020
  },
  {
    link: "#",
    title: "Electrical Energy Harvesting using Monolayer MoS2 and MoS2-Graphene Heterostructures for Self Powering Electronic and Bioelectronics Devices, DST-INSPIRE Faculty Award, 35 Lakh, (2017-2022).",
    fundingAgency: "DTU",
    startYear: 2017,
    endYear: 2022
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
            <td>{item.startYear} - {item.endYear || 'Present'}</td>
            <td><a href={item.link} rel="noopener noreferrer">here</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const ResearchThemes = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const currentYear = new Date().getFullYear();
  const OngoingResearchData = researchData.filter(item => item.endYear === '');
  const CompletedResearchData = researchData.filter(item => (item.endYear < currentYear && item.endYear!==''));

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
