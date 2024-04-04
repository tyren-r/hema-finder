import React from "react";
import GoogleMapReact from 'google-map-react';
import HemaMapLogic from "../logic/useHemaMapLogic";
import User from '../../../misc/user.png';
import HemaClubs from '../../../misc/hemaClubs.json'
import HemaMarker from "./hemaMarker";
import { Tooltip } from 'react-tooltip'

export default function HemaMap() {
  const { userLat, userLong } = HemaMapLogic();

  return (
    userLat && userLong ? (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD6Hak_dqyUSpKnqqQ-6OaKnNI-qSQasp8" }}
          defaultCenter={{
            lat: userLat,
            lng: userLong
          }}
          defaultZoom={5}
        >
          <img
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
          />
          {HemaClubs.map((club, index) => (
            <HemaMarker key={index} name={club.name} lat={club.lat} lng={club.lng} url={club.url} />
          ))}
        </GoogleMapReact>
      </div>
    )
      :
      ('LOADING')
  );
}