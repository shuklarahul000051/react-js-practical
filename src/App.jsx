import Header from './components/header'
import Timezone from './components/timezone'
import Table from './components/table'
import { useState } from 'react';
import moment from 'moment-timezone';

function App() {
  const [currWeek, setCurrWeek] = useState(0);  
  const [timezone, setTimezone] = useState('UTC');

  const handleTimezoneChange = (selectedTimezone) => {
    // Convert the current date to the new timezone
    const convertedDate = moment()
      .tz(selectedTimezone)
      .format('YYYY-MM-DD HH:mm:ss');

    // Implement logic to update displayed times based on the selected timezone
    // For simplicity, let's just log the converted date
    console.log(`Converted Date: ${convertedDate}`);

    // Update setTimezone accordingly
    setTimezone(selectedTimezone);
  };

  const updateCurrWeek = (week) => {
    setCurrWeek(prev => prev + week);
  }

    return (
        <div className='container'>
            <Header updateCurrWeek={updateCurrWeek}/>
            <Timezone handleTimezoneChange={handleTimezoneChange} timezone={timezone}/>
            <Table timezone={timezone} currWeek={currWeek}/>
        </div>
    )
}

export default App
