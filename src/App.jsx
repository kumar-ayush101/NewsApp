import React, { useState } from 'react'
import News from './components/News.jsx'
import './App.css'

function App() {
  const [category, setCategory] = useState('general')
  const handleCategory=(e)=>{
    setCategory(e.target.value)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <div><h1>Newso App</h1></div>
        
        <select className='selector' onChange={handleCategory} value={category}>
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="tech">Tech</option>
        </select>
      </header>
      <News category={category}/>
    </div>
  )
}

export default App
