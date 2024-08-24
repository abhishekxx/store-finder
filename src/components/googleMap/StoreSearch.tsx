import {GoogleMap, Marker} from '@react-google-maps/api';
import SearchBox from './SearchBox';

const StoreSearch = () => {
  const location = {lat: 27.7172, lng: 85.3240};
  const mapContainerStyle = {
    width: '100%',
    height: '50vh',
    overflow: 'hidden',
    borderRadius: '10px',
  };

  return (
    <div className='xl:grid md:grid'>
      <div className=''>
        <SearchBox />
      </div>

      <div className='col-start-2 col-end-4'>
        <GoogleMap mapContainerStyle={mapContainerStyle} center={location} zoom={13}>
            <Marker position={location}  />
      </GoogleMap>
      </div>
    </div>
  );
}

export default StoreSearch;

