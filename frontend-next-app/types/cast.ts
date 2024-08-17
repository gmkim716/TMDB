interface Cast {
  adult: boolean;
  gender: number;
  id: number;
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
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
