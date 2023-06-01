import React, { useState, useContext } from "react";

const LocationContext = React.createContext()
const UpdateLocationContext = React.createContext()

export const useLatLng = ()=>{
    return useContext(LocationContext)
}

export const useUpdateLatLng =()=>{
    return useContext(UpdateLocationContext)
}

export const LocationProvider = ({value, children})=>{
    const [latLng, setLatLng ] = useState(value)
    return(
        <LocationContext.Provider value={latLng}>
            <UpdateLocationContext.Provider value={setLatLng}>
                {children}
            </UpdateLocationContext.Provider>
        </LocationContext.Provider>
    )
}

export default LocationProvider