
async function createMarkers(map: naver.maps.Map, latlngs: {x: string, y: string}[]) {
  const result: naver.maps.Marker[] = [];
  return new Promise<naver.maps.Marker[]>((resolve, reject) => {
    latlngs.forEach(((latlng, i) => {
      result[i] = new naver.maps.Marker({
        position: new naver.maps.LatLng(+latlng.y, +latlng.x),
        map
      });

      if(result.filter(item => !!item).length === latlngs.length) {
        resolve(result);
      }
    }))
  });
}

export default createMarkers;
