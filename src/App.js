import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {
  const pageSize=9;
  const[progress, setProgress]= useState(0)
  const apiKey= process.env.REACT_APP_NEWS_API
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/"
            element={<News  setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>}/>
        </Routes>
        <Routes>
          <Route exact path="/business"
            element={<News  setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="in" category="business"/>}/>
        </Routes>
        <Routes>
          <Route exact path="/entertainment"
            element={<News  setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
        </Routes>
        <Routes>
          <Route exact path="/general"
            element={<News  setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>}/>
        </Routes>
        <Routes>
          <Route exact path="/health"
            element={<News  setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="health"/>}/>
        </Routes>
        <Routes>
          <Route exact path="/science"
            element={<News  setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="science"/>}/>
        </Routes>
        <Routes>
          <Route exact path="/sports"
            element={<News  setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
        </Routes>
        <Routes>
          <Route exact path="/technology"
            element={<News  setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  
}

export default App;

