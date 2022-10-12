import { useEffect, useRef } from 'react';
import { useImmer } from 'use-immer';

import Icon from '@/components/Icon';

import createMarkers from './createMarkers';
import geocode from './geocode';
import getLatLngBounds from './getLatLngBounds';
import useWatchPosition from './useWatchPosition';

import styles from './NaverMap.module.css';
import Button from '../Button';

type NaverMapState = {
  map?: naver.maps.Map;
  geocoded: (naver.maps.Service.AddressItemV2 | { error: string })[];
  markers: naver.maps.Marker[];
};
type NaverMapProps = {
  addresses?: string[];
  latlngs?: { x: string; y: string }[];
};
function NaverMap({ addresses, latlngs }: NaverMapProps) {
  const ref = useRef<NaverMapState>({
    map: undefined,
    geocoded: [],
    markers: [],
  });

  const [state, setState] = useImmer({
    watchPosition: false,
  });

  const onClickMyLocation = () => {
    setState(dr => {
      dr.watchPosition = !dr.watchPosition;
    });
  };

  useEffect(() => {
    ref.current.map = new naver.maps.Map('naverMap', {
      scaleControl: false,
      logoControl: true,
      logoControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
      mapDataControl: false,
      mapTypeControl: false,
      zoomControl: false,
    });
  }, []);

  useWatchPosition(
    state.watchPosition,
    pos => {
      if (!ref.current.map) {
        return;
      }
      console.log(pos.coords);
      ref.current.map.setCenter({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    },
    err => {
      console.warn('err', err);
    }
  );

  useEffect(() => {
    if (!addresses) {
      return;
    }

    (async () => {
      ref.current.geocoded = await geocode(addresses);
      if (ref.current.map) {
        const geocoded = ref.current.geocoded.filter(
          (it): it is naver.maps.Service.AddressItemV2 => !(it as any).error
        );
        ref.current.map.fitBounds(getLatLngBounds(geocoded));
        ref.current.markers = await createMarkers(ref.current.map, geocoded);
      }
    })();
  }, [addresses]);

  useEffect(() => {
    if (!latlngs) {
      return;
    }

    (async () => {
      if (ref.current.map) {
        ref.current.map.fitBounds(getLatLngBounds(latlngs));
        ref.current.markers = await createMarkers(ref.current.map, latlngs);
      }
    })();
  }, [latlngs]);

  return (
    <div className={styles.NaverMapContainer}>
      <div
        id="naverMap"
        className={styles.NaverMap}
      ></div>
      <div className={styles.BottomRightControl}>
        <Button onClick={onClickMyLocation}>
          <Icon
            name="MdMyLocation"
            color="black"
          />
        </Button>
      </div>
    </div>
  );
}

export default NaverMap;
