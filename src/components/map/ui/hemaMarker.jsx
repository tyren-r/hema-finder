import Pin from '../../../misc/location-pin.png' ;
import { Tooltip } from 'react-tooltip'

const HemaMarker = (props) => (
    
    <a
        target="_blank"
        rel="noreferrer"
        href={props.url}
        data-for="club"
        data-tip={props.name +'<br/>Click for directions'}
              
        >
            <Tooltip
            multiline={true}
            id="club"
             />
        <img
        alt={props.name}
            height={20}
            lat={props.lat}
            lng={props.lng}
            src={Pin}
        />
    </a>
)

export default HemaMarker;