import React from "react";
import { GoogleMap, Marker } from "react-google-maps";
import markerIcon from "../../img/locationMarker.png";

class Map extends React.Component {

  render(){
    return (
    <>
      <GoogleMap
      defaultZoom={17}
      defaultCenter={{lat: 49.428226, lng: 32.089642}}
      >
        <Marker
            position={{
              lat: 49.428226,
              lng: 32.089642 
            }}
            icon={{
              url: markerIcon,
              scaledSize: new window.google.maps.Size(47, 45)
            }}
          />

      </GoogleMap>
    </>
    );

  }  
    
}

export default Map;