import { useState } from 'react'


import './App.css'
import Register from './components/Register'
import Result from './components/Result'

function App() {
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <>
      <Register handleChange={handleChange} />
      <Result value={value} />
    </>
  )
}

export default App
