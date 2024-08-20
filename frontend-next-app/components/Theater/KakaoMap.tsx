import useKakaoLoader from "@/hooks/useKakaoLoader";
import { Map, MapTypeControl, ZoomControl } from "react-kakao-maps-sdk";

interface KakaoMapProps {
  viewLevel?: number;
  latitude: number;
  longitude: number;
}

export default function KakaoMap({
  viewLevel = 3,
  latitude,
  longitude,
}: KakaoMapProps) {
  useKakaoLoader();

  return (
    <>
      <Map
        id="map"
        center={{
          lat: latitude,
          lng: longitude,
        }}
        style={{
          width: "100%",
          height: "350px",
        }}
        level={viewLevel} // 지도의 확대 레벨
      >
        <MapTypeControl position={"TOPRIGHT"} />
        <ZoomControl position={"RIGHT"} />
      </Map>
    </>
  );
}
