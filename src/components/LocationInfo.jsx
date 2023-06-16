import './styles/LocationInfo.css'
const LocationInfo = ({ location }) => {
  
    return (
    <article className='container'>
      <div className='fondo'>
      <h2 className='name__location'>{location?.name}</h2>
      <ul className='info'>
        <li><span className='info_location'>Type:</span><span>{location?.type}</span></li>
        <li><span className='info_location'>Dimension:</span><span>{location?.dimension}</span></li>
        <li><span className='info_location'>Population:</span><span>{location?.residents.length}</span></li>
      </ul>
      </div>
    </article>
  )
}

export default LocationInfo