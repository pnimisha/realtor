import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  const { id } = useParams();
  const { earthquakes } = props;
  if (id) {
    const earthquakeDetail = earthquakes.filter((earthquake) => (earthquake.id === id));

    if (earthquakeDetail.length > 0) {
      return (
        <div className="earthquake-detail-page">
          <div>
            <h2>{earthquakeDetail[0].properties.title}</h2>
            <table className="detail">
              <tbody>
                <tr>
                  <td className="label">Title</td>
                  <td className="value">{earthquakeDetail[0].properties.title}</td>
                </tr>
                <tr>
                  <td>Magnitude</td>
                  <td>{earthquakeDetail[0].properties.mag}</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>{new Date(earthquakeDetail[0].properties.time).toLocaleString('en-US', { timeStyle: 'medium', dateStyle: 'medium' })}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{earthquakeDetail[0].properties.status}</td>
                </tr>
                <tr>
                  <td>Tsunami</td>
                  <td>{earthquakeDetail[0].properties.tsunami}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>{earthquakeDetail[0].properties.type}</td>
                </tr>
              </tbody>

            </table>
          </div>
          <div className="clear" />
        </div>
      );
    }
  }

  return '<>';
};

export default Detail;
