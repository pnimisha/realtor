/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const { earthquakes } = props;
  const [sortConfig, setSortConfig] = useState(null);

  const doSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedItems = useMemo(() => {
    const sortedData = [...earthquakes];
    if (sortConfig !== null) {
      sortedData.sort((a, b) => {
        if (a.properties[sortConfig.key] < b.properties[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a.properties[sortConfig.key] > b.properties[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedData;
  }, [earthquakes, sortConfig]);

  if (earthquakes.length > 0) {
    return (
      <div className="home-page">
        <table>
          <thead>
            <tr>
              <th>
                <div onClick={() => doSort('title')}>
                  Title
                </div>
              </th>
              <th>
                <div onClick={() => doSort('mag')}>
                  Magnitude
                </div>
              </th>
              <th>
                <div onClick={() => doSort('time')}>
                  Time
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((item) => (
              <tr key={item.id}>
                <td><Link to={`/${item.id}`}>{item.properties.title}</Link></td>
                <td>{item.properties.mag}</td>
                <td>{new Date(item.properties.time).toLocaleString('en-US', { timeStyle: 'medium', dateStyle: 'medium' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div style={{ textAlign: 'center' }}>Could not earthquake data</div>
  );
};

export default Home;
