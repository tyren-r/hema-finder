import React from "react";
import { GoogleMap } from '@react-google-maps/api';
import HemaMapLogic from "../logic/useHemaMapLogic";
import User from '../../../misc/user.png';
import HemaClubs from '../../../misc/hemaClubs.json';
import HemaMarker from "./hemaMarker";
import { Marker,OverlayView } from '@react-google-maps/api';

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
          <Marker key={1235864} label={{text:"Your Location", className:'marker-label'}} icon={User}  position={ center }   />
          {HemaClubs.map((club, index) => (
            <OverlayView 
            mapPaneName="overlayMouseTarget"
            position={{ lat: club.lat, lng: club.lng }}
            key={index}>
              <HemaMarker  name={club.name} url={club.url} />
            </OverlayView>
          ))}
        <></>
      </GoogleMap>
  ) : 'Loading'
}

export default React.memo(HemaMap)
