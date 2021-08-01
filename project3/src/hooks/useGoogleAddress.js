import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDH6RIwc1CZVyeJRbD79MSWulfDBYsrGaI`;

    const loadData = useCallback (async () => {
        const response = await axios(API)
        setMap(response.data.results[0].geometry.location);
    }, [API])

    useEffect(() => {
        loadData()
    }, [loadData]);
    return map;
};

export default useGoogleAddress;