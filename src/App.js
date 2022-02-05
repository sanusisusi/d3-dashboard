import React, { useState } from 'react';
import DonutComponent from './components/DonutChart/DonutComponent';
import BarChart from './components/BarChart/BarChart';
import LineChart from './components/LineChart/LineChart';

const App = (props) => {

  // React hooks with common state values for all components 
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [groupColour, setGroupColour] = useState('lightgrey');

  //function that will hook into the state to change it 
  function updateBarChart(group, colour) {
    setSelectedGroup(group);
    setGroupColour(colour);
  }

//header styles
const headerStyle = {
  fontSize: '40px',
  fontFamily: 'sans',
  textAlign: 'center',
  background: 'lightBlue',
  padding: '10px',
  marginBottom: '2rem'
}
  //footer styles
const footerStyle = {
    fontSize: '15px',
    fontFamily: 'segoe',
    textAlign: 'center',
    background: 'lightBlue',
    padding: '10px'
}

  return(
  <div>
    <header style={headerStyle}>SUSI COMPANY SALES PERFORMANCE</header>
    <svg viewBox="-2 0 100 50" preserveAspectRatio="xMidYMid meet"> 
      <DonutComponent x={15} y={20} onChangeGroup={updateBarChart}/>
      <BarChart positionX={35} positionY={50} width={80} height={100} selectedGroup={selectedGroup} barColour={groupColour}/>
      <LineChart positionX={35} positionY={4} selectedGroup={selectedGroup} lineColour={groupColour} />
    </svg>
    <footer style={footerStyle}>&copy; 2022 Sanusi Abdulkadir<br/>Software Engineer</footer>
  </div>
  );

};


export default App;
