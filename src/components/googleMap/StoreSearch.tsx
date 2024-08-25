import {GoogleMap, Marker} from '@react-google-maps/api';
import SearchBox from './SearchBox';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Place {
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  name: string;
  address: string;
}
  
const center = {lat: 27.7172, lng: 85.3240};

const StoreSearch = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '50vh',
    overflow: 'hidden',
    borderRadius: '10px',
  };

    const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const location = `${center.lat},${center.lng}`;
      const radius = 5000; // 5 km
      const type = 'store'; // Specify the type of place

      try {
        const response = await axios.get<{ results: Place[] }>(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=AIzaSyCydWgmsMsjtLLFuDqvPyWAOjUkM0eqKQw`
        );

        setPlaces(response.data.results);
      } catch (error) {
        console.error("Error fetching data from Google Maps API", error);
      }
    };

    fetchPlaces();
  }, []);



  return (
    <div className='container xl:grid md:grid'>
      <div className='md:py-10'>
        <SearchBox />
      </div>

      <div className='col-start-2 col-end-4 p-0.5'>
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13} options={{streetViewControl: false, zoomControl: false, mapTypeControl: false, fullscreenControl: false}}>
          {places.map((place, index) => (
            <Marker
              key={index}
              position={{
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng,
              }}
              title={place.name}
            />
          ))}

      </GoogleMap>
      </div>
    </div>
  );
}

export default StoreSearch;


// "https://maps.googleapis.com/maps/api/js?key=AIzaSyCydWgmsMsjtLLFuDqvPyWAOjUkM0eqKQw&v=3.exp&sensor=false&libraries=places"