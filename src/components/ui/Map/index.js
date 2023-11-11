import { Loader } from '@googlemaps/js-api-loader';
import { useEffect, useRef } from 'react';

const loader = new Loader({
  apiKey: 'AIzaSyAagR4OpygXSRSycNaDcCYsbx6fRqazx6U',
  version: 'weekly',
  libraries: ['places']
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};

const GoogleMap = () => {
  const mapRef = useRef();

  useEffect(() => {
    const initMap = async () => {
    
      const { Map } = await loader.importLibrary('maps');
    
      const position = {
        lat: 43.642693,
        lng: -79.3871189
      };
    
      const mapOptions = { // google.maps.MapOptions
        center: position,
        zoom: 17,
        mapId: 'MY_NEXTJS_MAPID'
      };
    
      const map = new Map(mapRef.current, mapOptions);
    };
    
    initMap();
  }, []);

  return (
    <div style={{ height: '600px', width: '100%' }} ref={mapRef}>
      <p>ggggggggg</p>
    </div>
  );
};

export default GoogleMap;