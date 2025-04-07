import React, { useState } from 'react';
import './publicationsMain.css';

const publicationsData = [
  {
    index: 1,
    authors: 'Sarjana Yadav, Sneha Senapati, Samir Kumar, Shashank K. Gahlaut, and J. P. Singh',
    title: 'GLAD Based Advanced Nanostructures for Diversified Biosensing Applications: Recent Progress.',
    link: 'https://www.google.com',
    journal: 'Biosensors, 12(12), 1115 (2022)',
    type: 'Journal',
  },
  {
    index: 2,
    authors: 'Yogita Maithani, J. A. Khan, B. R. Mehta, and J. P. Singh',
    title: 'Cubic phase optimization and influence of post-annealing on microstructure, optical, wetting, and nanomechanical properties of zirconia thin films.',
    link: 'https://www.google.com',
    journal: 'Ceramics International, 49(1), 1048-1060 (2023)',
    type: 'Conference Paper',
  },
  {
    index: 3,
    authors: 'Yogita Maithani, B. R. Mehta, and J. P. Singh',
    title: 'Implementation of hybrid Ag nanorods embedded RGO-PDMS conductive material for flexible and dry electrocardiography sensor.',
    link: 'https://www.google.com',
    journal: 'Materials Letters: X, 15, 100152 (2022)',
    type: 'Book Chapters',
  },
];

const filterOptions = ['All', 'Journal', 'Conference Paper', 'Book Chapters'];

const PublicationsMain = () => {
  const [selectedType, setSelectedType] = useState('All');

  const filteredPublications = selectedType === 'All'
    ? publicationsData
    : publicationsData.filter(pub => pub.type === selectedType);

  return (
    <div className="publicationMain">
      <div className="list">
        <div className="publication_body">
          <div className="yearBox1">Publications</div>

          <div className="choiceHolder">
            {filterOptions.map(option => (
              <button
                key={option}
                className={`choice ${selectedType === option ? 'active' : ''}`}
                onClick={() => setSelectedType(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <table className="research-table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Authors and Title</th>
                <th>Journal</th>
              </tr>
            </thead>
            <tbody>
              {filteredPublications.map(pub => (
                <tr key={pub.index}>
                  <td>{pub.index}</td>
                  <td>
                    {pub.authors}
                    <span className="publication-title">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        “{pub.title}”
                      </a>
                    </span>
                  </td>
                  <td>{pub.journal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PublicationsMain;
