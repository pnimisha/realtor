/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import User from './components/User';
import Detail from './components/Detail';
import SiteInfo from './SiteInfo.data'; // load site logo and title first

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const jsonResponse = await fetch('/src/data.json');
      	const response = await jsonResponse.json();
        setData(response);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <nav>
          <div><Link to="/"><img src={SiteInfo ? SiteInfo.logoImage : ''} alt={SiteInfo ? SiteInfo.title : ''} /></Link></div>
          <h1 className="title">{SiteInfo ? SiteInfo.title : '' }</h1>
          <div>
            <Link to="/user">
              Welcome
              {data ? data.profile.firstName : '' }
            </Link>
          </div>
        </nav>
        <Switch>
          <Route path="/user">
            <User profile={data ? data.profile : {}} />
          </Route>
          <Route path="/:id">
            <Detail earthquakes={data ? data.data.features : []} />
          </Route>
          <Route path="/">
            <Home earthquakes={data ? data.data.features : []} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
