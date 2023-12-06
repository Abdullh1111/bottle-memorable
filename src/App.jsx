import { useEffect, useState } from 'react';
import './App.css'
import Watch from './components/watch/watch';

function App() {
  
  const [watches, setWatches] = useState([]) 
  useEffect(() =>{
      fetch('watches.json')
      .then(res => res.json())
      .then(data => setWatches(data))
  },[])
  // console.log(watches)
  return (
    <>
      <h1>React Es6</h1>
      {/* <Sunglass></Sunglass> */}
      {watches.map(watch =><Watch key={watch.id} watch={watch}></Watch>)}
    </>
  )
}

export default App
