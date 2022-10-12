function getLatLngBounds(latlngs: { x: string; y: string }[]) {
  const result = latlngs.reduce(
    ([min, max], item) => {
      return [
        { x: Math.min(min.x, +item.x), y: Math.min(min.y, +item.y) },
        { x: Math.max(max.x, +item.x), y: Math.max(max.y, +item.y) },
      ];
    },
    [
      { x: Infinity, y: Infinity },
      { x: -Infinity, y: -Infinity },
    ]
  );

  return new naver.maps.LatLngBounds(
    new naver.maps.LatLng(result[0].y, result[0].x),
    new naver.maps.LatLng(result[1].y, result[1].x)
  );
}

export default getLatLngBounds;
