import React, {useState, useMemo} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

const Home = (props) => {
    const { earthquakes } = props;
    const [sortConfig, setSortConfig] = useState(null);
   
    console.log(sortConfig)
    const doSort = key => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
          direction = 'descending';
        }
        setSortConfig({ key, direction });
    }

    const sortedItems = useMemo(() => {
          
        let sortedData = [...earthquakes];
        if (sortConfig !== null) {
            sortedData.sort((a, b) => {
            if (a['properties'][sortConfig.key] < b['properties'][sortConfig.key]) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a['properties'][sortConfig.key] > b['properties'][sortConfig.key]) {
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
                            <div type="button" onClick={() => doSort('title')}>
                                Title
                            </div>
                        </th>
                        <th>
                            <div type="button" onClick={() => doSort('mag')}>
                                Magnitude
                            </div>
                        </th>
                        <th>
                            <div type="button" onClick={() => doSort('time')}>
                                Time
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedItems.map(product => (
                    <tr key={product.id}>
                        <td><Link to={`/${product.id}`}>{product.properties.title}</Link></td>
                        <td>{product.properties.mag}</td>
                        <td>{new Date(product.properties.time).toLocaleString('en-US',{timeStyle: "medium",dateStyle: "medium"})}</td>
                    </tr>
                    ))}
                </tbody>
            </table> 
            </div>
        )
    } else {
        return (
					<div style={{textAlign: 'center'}}>Could not earthquake data</div>
				)
    }
    
    
}

export default Home;