"use client";

import { useEffect, useState } from "react";
import styles from "./NearbyTheaterPage.module.css";
import KakaoMap from "@/components/Theater/KakaoMap";
import useGeoLocation from "@/hooks/useGeoLocation";

interface Theater {
  id: number;
  name: string;
  address: string;
  contact: string;
}

export default function NearbyTheaterPage() {
  const location = useGeoLocation();

  const [theaters, setTheaters] = useState<Theater[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheater, setSelectedTheater] = useState<Theater | null>(null); // 선택된 영화관 상태 추가

  useEffect(() => {
    // 초기 영화관 리스트 (임시 데이터 사용)
    setTheaters([
      {
        id: 1,
        name: "Theater One",
        address: "123 Main St",
        contact: "123-456-7890",
      },
      {
        id: 2,
        name: "Theater Two",
        address: "456 Broadway Ave",
        contact: "987-654-3210",
      },
    ]);
  }, []);

  const handleSearch = () => {
    // 검색 기능 예시 (실제 동작은 없음)
    console.log("Searching for theaters with query:", searchQuery);
  };

  const handleDetailsClick = (theater: Theater) => {
    setSelectedTheater(theater); // 선택된 영화관 상태 업데이트
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Nearby Theaters</h1>
        <input
          type="text"
          placeholder="Search for theaters..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />

        <div className={styles.mapContainer}>
          {location.latitude && location.longitude && (
            <KakaoMap
              viewLevel={6}
              latitude={location.latitude}
              longitude={location.longitude}
            />
          )}
        </div>

        <ul className={styles.theaterList}>
          {theaters.map((theater) => (
            <li key={theater.id} className={styles.theaterItem}>
              <div className={styles.theaterName}>{theater.name}</div>
              <div className={styles.theaterAddress}>{theater.address}</div>
              <div className={styles.theaterContact}>{theater.contact}</div>
              <a
                href="#"
                className={styles.detailsLink}
                onClick={() => handleDetailsClick(theater)}
              >
                View Details
              </a>
            </li>
          ))}
        </ul>
      </div>

      {selectedTheater && (
        <div className={styles.modal}>
          <h2>{selectedTheater.name}</h2>
          <p>{selectedTheater.address}</p>
          <p>{selectedTheater.contact}</p>
          <button onClick={() => setSelectedTheater(null)}>Close</button>
        </div>
      )}
    </>
  );
}
