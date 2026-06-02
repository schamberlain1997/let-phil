export interface Exercise {
  name: string;
  level: string;
  equipment: string | null;
  category: string;
  force: string | null;
  mechanic: string | null;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  instructions: string[];
  images: string[];
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