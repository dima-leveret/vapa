import React from 'react';
import Map from "../googleMap/Map"

import {  withScriptjs, withGoogleMap } from 'react-google-maps';

import { FiInstagram } from 'react-icons/fi';

import "./Contacts.css"

function Contacts() {
    const WrappedMap = withScriptjs(withGoogleMap(Map));
    
    return (
        <div className='contactsBody' >
            <div className="contactsContainer" >
                <div className="contactsInfo" >
                    <div>
                        <h1> Contacts: </h1>
                        <h3> +38 063 497 03 20 </h3>
                        <h3> info@vapa.com.ua </h3>
                        <h4> blvd. Shewchenka 345/1, Cherkassy, Ukraine </h4>
                        <h4> Any questions? Just let me know </h4>

                        <a href='https://www.instagram.com/vapa.eco/' target='blank' >
                            <FiInstagram className='instaIcon' />
                        </a>
                    </div>
                </div>
                <div className='contactsMap' >
                <WrappedMap 
                    googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABXq7l1yJ16e4DGL-Wpup5WJ_AlIJdISk`}
                    loadingElement = { <div style={{ height: '100%' }} /> }
                    containerElement = {<div style={{ height: '100%' }} /> }
                    mapElement = {<div style={{ height: '100%' }} /> }
                    />
                </div>
            </div>
        </div>
        
    )
}

export default Contacts;