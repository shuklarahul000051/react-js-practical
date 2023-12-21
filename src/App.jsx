import { useState } from 'react'
import Header from './components/header'
import Timezone from './components/timezone'
import Table from './components/table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header/>
      <Timezone/>
      <Table/>
    </div>
  )
}

export default App
