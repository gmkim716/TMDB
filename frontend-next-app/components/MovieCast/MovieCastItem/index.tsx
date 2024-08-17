import Image from "next/image";
import styles from "./MovieCastItem.module.css";

interface MovieCastItemProps {
  known_for_department:
    | "Acting"
    | "Crew"
    | "Directing"
    | "Writing"
    | "Production"
    | "Camera"
    | "Sound"
    | "Art"
    | "Costume & Make-Up"
    | "Editing"
    | "Visual Effects"
    | "Lighting"
    | "Acting"
    | "Art"
    | "Production"
    | "Sound"
    | "Costume & Make-Up"
    | "Camera"
    | "Directing"
    | "Writing"
    | "Editing"
    | "Visual Effects"
    | "Lighting";
  name: string;
  profile_path: string;
  character: string;
}

export default function MovieCastItem({
  known_for_department,
  name,
  profile_path,
  character,
}: MovieCastItemProps) {
  return (
    <div className={styles.castItem}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        alt={name}
        width={100}
        height={150}
      />
      <div className={styles.castInfo}>
        <h3>{name}</h3>
        <p>{character}</p>
        <p>{known_for_department}</p>
      </div>
    </div>
  );
}
