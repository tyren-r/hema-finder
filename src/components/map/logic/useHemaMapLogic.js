import { useState, useEffect, useCallback } from "react";
import {  useJsApiLoader } from '@react-google-maps/api';


const useHemaMapLogic = () => {
  const [userLat, setUserLat] = useState();
  const [userLong, setUserLong] = useState();
  const [map, setMap] = useState(null);

  useEffect(() => {
    window.alert("Google provides a notification that the google maps api cant be loaded correctly. Please be aware that this is only due to billing not being enabled on the account, and the API is in fact properly loaded.")
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserLat(position.coords.latitude);
      setUserLong(position.coords.longitude);
    });
  }, [])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // billing isn't enabled - no risk in public display of this key 
    googleMapsApiKey: "AIzaSyD6Hak_dqyUSpKnqqQ-6OaKnNI-qSQasp8"
  })

  const center = {
    lat: userLat,
    lng: userLong
  };

  const onLoad = useCallback(function callback(map) {
    if(userLat && userLong){
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
    }
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return { userLat, userLong, isLoaded, center, onLoad, onUnmount };
}
export default useHemaMapLogic;