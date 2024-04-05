import React from "react";
import { GoogleMap } from '@react-google-maps/api';
import HemaMapLogic from "../logic/useHemaMapLogic";
import User from '../../../misc/user.png';
import HemaClubs from '../../../misc/hemaClubs.json';
// import HemaMarker from "./hemaMarker";
// import { Tooltip } from 'react-tooltip';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

function HemaMap() {
  const { userLat, userLong, isLoaded, center, onLoad, onUnmount } = HemaMapLogic();
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* <img
            height={20}
            alt="your location"
            lat={userLat}
            lng={userLong}
            src={User}
            data-for="user"
            data-tip="Your Location"
          />
          <Tooltip
            id="user"
          /> */}
          <Marker key={1235864} label={{text:"You", className:'marker-label'}} icon={User}  position={ center }   />
          {HemaClubs.map((club, index) => (
            <Marker key={index}  label={club.name} position={ { lat: club.lat, lng: club.lng }}  url={club.url} />
          ))}
        <></>
      </GoogleMap>
  ) : 'Loading'
}

export default React.memo(HemaMap)
