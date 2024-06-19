import '../css/index.css'
import data from '../data/data.js'
import worldIcon from '../images/world.svg'
import TravelLocation from './TravelLocation.jsx'

function App() {

  const travelLocations = data.map(location => {
    return (
      <div className='location-container'>
        <TravelLocation {...location} />
        <hr></hr>  
      </div>
    )
  })

  return (
    <div className='app-container'>
      <header>
        <img src={worldIcon}/>
        <h2>My Travel Journal</h2>
      </header>
      {travelLocations}
    </div>
  )
}

export default App
