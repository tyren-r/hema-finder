import User from '../../../misc/user.png' ;
import { Tooltip } from 'react-tooltip'

const UserMarker = (props) => (
    
    <a
        target="none"
        rel="noreferrer"
        data-tooltip-id="user"
        data-tooltip-content="Your Location"
              
        >
            <Tooltip
            id="user"
            style={{padding:'6px',fontSize:'11px'}}
             />
        <img
            alt="your location"
            height={20}
            src={User}
        />
    </a>
)

export default UserMarker;