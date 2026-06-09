import { type Exercise } from "../types";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const imagePath = exercise.images?.[0]
    ? `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${exercise.images[0]}`
    : null;

  return (
    <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 shadow-xl space-y-4">
      <div className="flex items-center gap-3 flex-wrap">
      <h2 className="text-2xl font-bold text-[#f8fafc]">{exercise.name}</h2>
       {exercise.isCustom && (
       <span className="text-xs bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30 px-2 py-0.5 rounded-full">
      Custom
       </span>
      )}
      </div>

      {/* Meta Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-black/20 p-3 rounded-lg text-sm text-[#94a3b8]">
        <p><strong>Level:</strong> {exercise.level || "N/A"}</p>
        <p><strong>Equipment:</strong> {exercise.equipment || "Bodyweight"}</p>
        <p><strong>Category:</strong> {exercise.category || "N/A"}</p>
        <p><strong>Force:</strong> {exercise.force || "N/A"}</p>
        <p><strong>Mechanic:</strong> {exercise.mechanic || "N/A"}</p>
      </div>

      {/* Muscle groups */}
      <div className="text-sm space-y-1">
        <p><strong>Primary:</strong> <span className="text-[#34d399]">{exercise.primaryMuscles.join(", ")}</span></p>
        <p><strong>Secondary:</strong> <span className="text-[#94a3b8]">{exercise.secondaryMuscles.length > 0 ? exercise.secondaryMuscles.join(", ") : "None"}</span></p>
      </div>

      {/* Visual illustration */}
      {imagePath && (
        <img 
          src={imagePath} 
          className="max-w-xs h-auto rounded-lg bg-white/5 mx-auto border border-[#334155]" 
          alt={exercise.name} 
        />
      )}

      {/* Instructions */}
      <div className="space-y-2">
        <strong className="text-sm block text-[#f8fafc]">Steps to Perform:</strong>
        {exercise.instructions?.length > 0 ? (
          <ol className="list-decimal list-inside text-[#94a3b8] space-y-1 text-sm">
            {exercise.instructions.map((step, idx) => (
              <li key={idx} className="pl-1">{step}</li>
            ))}
          </ol>
        ) : (
          <p className="text-sm text-[#94a3b8]">No instructions available.</p>
        )}
      </div>
    </div>
  );
}