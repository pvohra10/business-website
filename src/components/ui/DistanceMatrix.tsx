import React, { useEffect } from 'react';


const address = import.meta.env.ADDRESS || "5055 Heatherliegh Avenue, Mississauga, ON";
// console.log('Address:', address);

interface Props {
    userLocation: string;
    onResult: (result: string) => void;
}

function DistanceMatrix({ userLocation, onResult }: Props) {
    useEffect(() => {
        if (!userLocation || !window.google?.maps) return;

        const service = new window.google.maps.DistanceMatrixService();

        service.getDistanceMatrix(
            {
                origins: [address],
                destinations: [userLocation],
                travelMode: window.google.maps.TravelMode.DRIVING,
                unitSystem: window.google.maps.UnitSystem.METRIC,
            },
            (response, status) => {
                if (status === 'OK') {
                    const element = response.rows[0].elements[0];
                    if (element.status === 'OK') {
                        onResult(`Distance: ${element.distance.text}, Duration: ${element.duration.text}`);
                    } else {
                        onResult('No route found.');
                    }
                } else {
                    onResult('Error with the request.');
                }
            }
        );
    }, [userLocation, onResult]);

    return null;
}

export default DistanceMatrix;
