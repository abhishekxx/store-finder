import {LoadScript} from '@react-google-maps/api';
import StoreSearch from './StoreSearch';

const GOOGLE_MAP = import.meta.env.GOOGLE_MAPP_APP_KEY;

const MapLayout = () => {
  return (
     <LoadScript googleMapsApiKey={GOOGLE_MAP}>
      <StoreSearch />
    </LoadScript>
  );
}

export default MapLayout;

