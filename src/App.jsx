import Header from './components/header'
import Timezone from './components/timezone'
import Table from './components/table'
import { useState } from 'react';
import moment from 'moment-timezone';

function App() {
	const [currWeek, setCurrWeek] = useState(0);
	const [timezone, setTimezone] = useState('UTC');

	const handleTimezoneChange = (selectedTimezone) => {
		// Update setTimezone accordingly
		setTimezone(selectedTimezone);
	};

	const updateCurrWeek = (week) => {
		setCurrWeek(prev => prev + week);
	}

	return (
		<div className='container'>
			<Header updateCurrWeek={updateCurrWeek} timezone={timezone} />
			<Timezone handleTimezoneChange={handleTimezoneChange} timezone={timezone} />
			<Table timezone={timezone} currWeek={currWeek} />
		</div>
	)
}

export default App
