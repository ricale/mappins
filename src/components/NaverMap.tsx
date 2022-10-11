import { useEffect, useRef } from "react";
import createMarkers from "../utils/createMarkers";
import geocode from "../utils/geocode";
import getLatLngBounds from "../utils/getLatLngBounds";

type NaverMapState = {
  map?: naver.maps.Map
  geocoded: (naver.maps.Service.AddressItemV2 | {error: string})[]
  markers: naver.maps.Marker[]
}
type NaverMapProps = {
  addresses?: string[]
  latlngs?: {x: string, y: string}[]
}
function NaverMap({
  addresses,
  latlngs,
}: NaverMapProps) {
  const ref = useRef<NaverMapState>({
    map: undefined,
    geocoded: [],
    markers: [],
  });

  useEffect(() => {
    ref.current.map = new naver.maps.Map('naverMap');
  }, []);

  useEffect(() => {
    if(!addresses) {
      return;
    }

    (async () => {
      ref.current.geocoded = await geocode(addresses)
      if(ref.current.map) {
        const geocoded = ref.current.geocoded.filter((it): it is naver.maps.Service.AddressItemV2 => !(it as any).error);
        ref.current.map.fitBounds(getLatLngBounds(geocoded));
        ref.current.markers = await createMarkers(ref.current.map, geocoded);
      }
    })();
  }, [addresses]);

  useEffect(() => {
    if(!latlngs) {
      return;
    }

    (async () => {
      if(ref.current.map) {
        ref.current.map.fitBounds(getLatLngBounds(latlngs));
        ref.current.markers = await createMarkers(ref.current.map, latlngs);
      }
    })();
  }, [latlngs]) 


  return (
    <div id="naverMap" style={{width: '100%', height: '100%'}}></div>
  )
}

export default NaverMap;
