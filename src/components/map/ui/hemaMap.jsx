import React from "react";
import { GoogleMap } from '@react-google-maps/api';
import HemaMapLogic from "../logic/useHemaMapLogic";
import HemaClubs from '../../../misc/hemaClubs.json';
import HemaMarker from "./hemaLocationMarker";
import UserMarker from "./userMarker";
import { OverlayView } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

function HemaMap() {
  const { isLoaded, center, onLoad, onUnmount } = HemaMapLogic();
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <OverlayView 
        mapPaneName="overlayMouseTarget"
        position={center}
        >
          <UserMarker />
        </OverlayView>

        {/* The Order of this array will never change, so using index as key is okay here */}
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
