import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDH6RIwc1CZVyeJRbD79MSWulfDBYsrGaI`;

    useEffect(async () => {
        {
                const response = await axios(API)
                console.log(response)
                setMap(response.data.results[0].geometry.location);
        }
    }, []);
    return map;
};

export default useGoogleAddress;