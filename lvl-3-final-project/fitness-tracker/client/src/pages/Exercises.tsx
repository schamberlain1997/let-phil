import { useState } from "react";
import { type Exercise } from "../types";
import ExerciseCard from "../components/ExerciseCard";

const MUSCLE_GROUPS = {
  "Upper Body": ["chest", "lats", "middle back", "lower back", "shoulders", "traps"],
  "Arms": ["biceps", "triceps", "forearms"],
  "Lower Body & Core": ["quadriceps", "hamstrings", "glutes", "calves", "abdominals"],
};

export default function Exercises() {
  const [query, setQuery] = useState("");
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchExercises = async (searchStr: string, muscleFilter: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json"
      );
      if (!response.ok) throw new Error("Failed to get exercise database.");
      
      const allExercises: Exercise[] = await response.json();

      const filtered = allExercises.filter((item) => {
        if (muscleFilter) {
          return item.primaryMuscles && item.primaryMuscles.includes(muscleFilter);
        }
        return item.name && item.name.toLowerCase().includes(searchStr.toLowerCase());
      });

      setExercises(filtered);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-2">
        <h3 className="text-3xl font-bold">Find Your Next Exercise</h3>
        <h3 className="text-lg text-[#94a3b8]">Search by name or use the filters below to target specific muscle groups.</h3>
      </div>

      {/* Input container */}
      <div className="flex gap-3 max-w-xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search exercises (e.g. Barbell Row)..."
          className="flex-1 bg-[#1e293b] border-2 border-[#334155] rounded-lg px-4 py-3 text-[#f8fafc] outline-none focus:border-[#10b981] transition-all"
        />
        <button
          onClick={() => fetchExercises(query, "")}
          className="bg-[#10b981] text-[#0f172a] font-bold rounded-lg px-6 py-3 uppercase tracking-wider text-sm hover:bg-[#34d399] transition-all transform hover:-translate-y-0.5 shadow-md active:translate-y-0"
        >
          Search
        </button>
      </div>

      {/* Filters Group */}
      <div className="bg-[#1e293b]/50 p-6 rounded-xl border border-[#334155] space-y-4">
        {Object.entries(MUSCLE_GROUPS).map(([category, muscles]) => (
          <div key={category} className="space-y-2">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-[#94a3b8]">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {muscles.map((muscle) => (
                <button
                  key={muscle}
                  onClick={() => {
                    setQuery("");
                    fetchExercises("", muscle);
                  }}
                  className="bg-[#1e293b] text-[#34d399] border-2 border-[#34d399] hover:bg-[#34d399] hover:text-[#0f172a] px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200"
                >
                  {muscle}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Active Area Output */}
      <div className="space-y-6">
        {loading && <p className="text-center text-[#94a3b8]">Loading exercise data...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && exercises.length === 0 && (
          <p className="text-center text-[#94a3b8]">No exercises loaded. Search or pick a muscle group above!</p>
        )}
        
        <div className="grid gap-6">
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </div>
      </div>
    </main>
  );
}