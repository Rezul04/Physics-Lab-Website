import React, { useState } from 'react';
import './publicationsMain.css';
import publicationJson from '../../../../data/proceedings.json';

const filterOptions = ['All', 'Journal', 'Conference Paper', 'Book Chapters'];

const PublicationsMain = () => {
  const [selectedType, setSelectedType] = useState('All');

  const filteredPublications =
    selectedType === 'All'
      ? publicationJson.proceedings
      : publicationJson.proceedings.filter(pub => pub.type === selectedType);

  return (
    <div className="publicationMain">
      <div className="list">
        <div className="publication_body">
          <div className="yearBo"><span>
         Publications   </span></div>

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
                <th>Authors</th>
                <th>Title</th>
                <th>Publication</th>
                <th>Type</th>
                <th>Volume</th>
                <th>Page</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {filteredPublications.map((pub, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{pub.authors?.join(', ')}</td>
                  <td>{pub.title}</td>
                  <td>{pub.name_of_publication || '—'}</td>
                  <td>{pub.type || '—'}</td>
                  <td>{pub.volume || '—'}</td>
                  <td>{pub.page || '—'}</td>
                  <td>{pub.year || '—'}</td>
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
