import { useEffect, useState } from "react";

interface GeoLocation {
  latitude: number | null;
  longitude: number | null;
}

export default function useGeoLocation() {
  const [location, setLocation] = useState<GeoLocation>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({
        latitude: null,
        longitude: null,
      });
      return; // 브라우저가 geolocation을 지원하지 않는 경우, 조기 종료
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({
        latitude,
        longitude,
      });
    });
  }, []);

  return location;
}
