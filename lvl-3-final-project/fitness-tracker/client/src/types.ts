export interface Exercise {
  id: string;
  name: string;
  category: string | null;
  equipment: string | null;
  level: string | null;
  force: string | null;
  mechanic: string | null;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  instructions: string[];
  images: string[];
  isCustom: boolean;
  createdById: string | null;
}

export interface ExercisesResponse {
  exercises: Exercise[];
  total: number;
  page: number;
  totalPages: number;
}


export interface WorkoutLog {
  id: number;
  date: string;
  exercise: string;
  weight: string;
  reps: string;
  sets: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}