import '../css/index.css'
import locationIndicator from '../images/location-indicator.svg'

function TravelLocation(props) {
    return (
        <div className='location'>
            <div>
                <img src={props.imageUrl} className='location-img' />
            </div>
            <div className='location-txt'>
                <div className='name-google-link'>
                    <h3 className='location-name'><img src={locationIndicator}/>{props.location}</h3>
                    <a href={props.googleMapsUrl} target='_blank'>View On Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h4>{`${props.startDate} - ${props.endDate}`}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default TravelLocation