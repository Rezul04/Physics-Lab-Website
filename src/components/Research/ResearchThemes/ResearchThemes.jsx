import React from 'react'
import './ResearchThemes.css'
import { Theme } from './Theme'

export const ResearchThemes = (props) => {

  const OngoingResearchData = [
    {
      link: "#",
      title: "Development of Surface Enhanced Raman Enhanced Raman Surface Enhanced Raman Surface Enhanced Raman  reff fefr ergrg Scattering (SERS) based Biosensor for Rapid Detection of oligonucleotides",
      fundingAgency: "DTU",
      startYear: 2020,
      endYear: 2024
    },
    {
      link: "#",
      title: "Indian Nanoelectronics Users grgrg ergergre rgreg rgrg Program - Idea to Innovation (INUP-i2i)",
      fundingAgency: "IITD (Delhi) , Delhi, India",
      startYear: 2021,
      endYear: 2024
    },
    {
      link: "#",
      title: "Ag Nanorods based Flexible wearable Dry Electrodes for Long-Term EEG Monitoring (FIRP Project 2021).",
      fundingAgency: "DTU",
      startYear: 2023,
      endYear: 2024
    },
    {
      link: "#",
      title: "Ag Nanorods based Flexible wear  rgr rgrwg able Dry Electrodes for Long-Term EEG Monitoring (FIRP Project 2021).",
      fundingAgency: "DTU",
      startYear: 2023,
      endYear: 2024
    },
    {
      link: "#",
      title: "Ag Nanorods based Flexible r rgrg  rgrwg grgr wrgrg rgrw wearable Dry Electrodes for Long-Term EEG Monitoring (FIRP Project 2021).",
      fundingAgency: "DTU",
      startYear: 2023,
      endYear: 2024
    },
    {
      link: "#",
      title: "Ag Nanorods based Flexible wearable Dry Electrodes for Long-Term EEG Monitoring (FIRP Project 2021).",
      fundingAgency: "DTU",
      startYear: 2023,
      endYear: 2024
    },
    {
      link: "#",
      title: "Ag Nanorods based Flexible wear ffsf rwgwrgwr able Dry Electrodes for Long-Term EEG Monitoring (FIRP Project 2021).",
      fundingAgency: "DTU",
      startYear: 2023,
      endYear: 2024
    },
    {
      link: "#",
      title: "Ag Nanorods based Flexible wearable Dry Electrodes for Long-Term EEG Monitoring (FIRP Project 2021).",
      fundingAgency: "DTU",
      startYear: 2023,
      endYear: 2024
    },

  ];

  const CompletedResearchData =OngoingResearchData;

  const renderOngoingResearchData = OngoingResearchData.map((data, index) => {
    return (
      <tr key={index}>
        <td>{index +1 }</td>
        <td>{data.title}</td>
        <td>{data.fundingAgency}</td>
        <td>{data.startYear}-{data.endYear}</td>
        <td><a href={data.link}>here </a></td>
      </tr>
    )
  });

  const renderCompletedResearchData = CompletedResearchData.map((data, index) => {
    return (
      <tr key={index}>
        <td>{index +1 }</td>
        <td>{data.title}</td>
        <td>{data.fundingAgency}</td>
        <td>{data.startYear}-{data.endYear}</td>
        <td><a href={data.link}> </a></td>
      </tr>
    )
  });

  return (
    // <div>{props.researchThemes.map((theme)=>{
    //        return (<Theme theme={theme} key={theme.sno}/>)
    // })}</div>
    <>
      <div className='table-container'>
      <div className="tableTitle">
        <h2>Ongoing</h2>
      </div>
        <table>
          <tr>
            <th>Sno.</th>
            <th>Title of the project</th>
            <th>Funding Agency</th>
            <th>Duration  </th>
            <th>Read more</th>
          </tr>
          {renderOngoingResearchData}
        </table>
      </div>
      <div className='table-container'>
      <div className="tableTitle">
        <h2>Completed</h2>
      </div>
        <table>
          <tr>
            <th>Sno.</th>
            <th>Title of the project</th>
            <th>Funding Agency</th>
            <th>Duration</th>
            <th>Read more</th>
          </tr>
          {renderCompletedResearchData}
        </table>
      </div>

    </>
  )
}
