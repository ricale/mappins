import { useEffect } from 'react';

function useWatchPosition(
  enabled: boolean,
  onSuccess: PositionCallback,
  onError?: PositionErrorCallback
) {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    const id = navigator.geolocation.watchPosition(onSuccess, onError);
    return () => {
      navigator.geolocation.clearWatch(id);
    };
  }, [enabled]);
}

export default useWatchPosition;
