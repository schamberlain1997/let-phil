import { useState, useEffect } from "react";
import { type WorkoutLog as WorkoutLogType } from "../types";

export default function WorkoutLog() {
  // --- Workout Log State ---
  const [workouts, setWorkouts] = useState<WorkoutLogType[]>(() => {
    const saved = localStorage.getItem("workouts");
    return saved ? JSON.parse(saved) : [];
  });

  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");

  // --- Contact Form State ---
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync workouts to LocalStorage whenever state updates
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  // Handle adding a new log line item
  const handleAddWorkout = (e: React.FormEvent) => {
    e.preventDefault();

    if (!exercise.trim()) {
      alert("Please enter an exercise name!");
      return;
    }

    const newWorkout: WorkoutLogType = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      exercise: exercise.trim(),
      weight: weight || "0",
      reps: reps || "0",
      sets: sets || "0",
    };

    setWorkouts((prev) => [...prev, newWorkout]);

    // Clear inputs
    setExercise("");
    setWeight("");
    setReps("");
    setSets("");
  };

  // Handle removing a single row item
  const handleDeleteWorkout = (id: number) => {
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
  };

  // Handle clearing out everything
  const handleClearAll = () => {
    if (workouts.length === 0) return;
    if (confirm("Are you sure you want to delete all entries? This cannot be undone.")) {
      setWorkouts([]);
    }
  };

  // Handle support message submissions
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const contactData = {
      name: contactName,
      email: contactEmail,
      message: contactMessage,
      timestamp: new Date().toLocaleString(),
    };

    const existingMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    existingMessages.push(contactData);
    localStorage.setItem("contactMessages", JSON.stringify(existingMessages));

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    }, 2000);
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
      {/* 1. Add Workout Box */}
      <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 shadow-xl space-y-4">
        <h2 className="text-2xl font-bold">Add Workout</h2>
        <form onSubmit={handleAddWorkout} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end w-full">
          <input
            type="text"
            placeholder="Exercise"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            className="w-full bg-[#1e293b] border-2 border-[#334155] rounded-lg px-4 py-2.5 text-[#f8fafc] outline-none focus:border-[#10b981] transition-all"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full bg-[#1e293b] border-2 border-[#334155] rounded-lg px-4 py-2.5 text-[#f8fafc] outline-none focus:border-[#10b981] transition-all"
          />
          <input
            type="number"
            placeholder="Reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="w-full bg-[#1e293b] border-2 border-[#334155] rounded-lg px-4 py-2.5 text-[#f8fafc] outline-none focus:border-[#10b981] transition-all"
          />
          <input
            type="number"
            placeholder="Sets"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            className="w-full bg-[#1e293b] border-2 border-[#334155] rounded-lg px-4 py-2.5 text-[#f8fafc] outline-none focus:border-[#10b981] transition-all"
          />
          <button
            type="submit"
            className="w-full bg-[#10b981] text-[#0f172a] font-bold rounded-lg py-3 uppercase tracking-wider text-sm hover:bg-[#34d399] transition-all transform hover:-translate-y-0.5 shadow-md active:translate-y-0 cursor-pointer"
          >
            Add
          </button>
        </form>
      </div>

      {/* 2. Logs Data Table Container */}
      <div className="space-y-4">
        <div className="w-full border border-[#334155] rounded-xl overflow-hidden shadow-xl bg-[#1e293b]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black/20 text-[#10b981] text-xs uppercase tracking-wider font-bold">
                <th className="p-4 text-left whitespace-nowrap">Date</th>
                <th className="p-4 text-left whitespace-nowrap">Exercise</th>
                <th className="p-4 text-left whitespace-nowrap">Weight</th>
                <th className="p-4 text-left whitespace-nowrap">Reps</th>
                <th className="p-4 text-left whitespace-nowrap">Sets</th>
                <th className="p-4 text-left whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {workouts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center p-8 text-[#94a3b8] tracking-wide">
                    No workouts logged yet. Time to hit the gym!
                  </td>
                </tr>
              ) : (
                workouts.map((w) => (
                  <tr key={w.id} className="hover:bg-white/[0.02] border-b border-[#334155] last:border-0 text-[#94a3b8] transition-colors">
                    <td className="p-4 text-sm whitespace-nowrap">{w.date}</td>
                    <td className="p-4 text-sm text-[#f8fafc] font-semibold">{w.exercise}</td>
                    <td className="p-4 text-sm whitespace-nowrap">{w.weight} kg</td>
                    <td className="p-4 text-sm">{w.reps}</td>
                    <td className="p-4 text-sm">{w.sets}</td>
                    <td className="p-4 text-sm">
                      <button
                        onClick={() => handleDeleteWorkout(w.id)}
                        className="text-[#ef4444] border border-[#ef4444] hover:bg-[#ef4444] hover:text-white px-3 py-1 rounded-md transition-colors text-xs font-semibold cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Clear Button */}
        {workouts.length > 0 && (
          <div className="text-right">
            <button
              onClick={handleClearAll}
              className="text-[#ef4444] border border-[#ef4444] hover:bg-[#ef4444] hover:text-white px-5 py-2.5 rounded-md transition-colors text-sm font-semibold shadow-md cursor-pointer"
            >
              Clear All Logs
            </button>
          </div>
        )}
      </div>

      {/* 3. Contact Form Block */}
      <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 shadow-xl max-w-xl space-y-4 mx-auto md:mx-0">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            className="bg-[#1e293b] border-2 border-[#334155] rounded-lg px-4 py-2.5 text-[#f8fafc] outline-none focus:border-[#10b981] transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            className="bg-[#1e293b] border-2 border-[#334155] rounded-lg px-4 py-2.5 text-[#f8fafc] outline-none focus:border-[#10b981] transition-all"
          />
          <textarea
            placeholder="How can we help you?"
            rows={4}
            required
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            className="bg-[#2a3447] border border-[#3d4b63] rounded-lg p-3 text-[#f8fafc] outline-none focus:border-[#10b981] transition-all"
          />
          <button
            type="submit"
            style={isSubmitted ? { backgroundColor: "#27ae60" } : undefined}
            className={`w-fit px-8 py-2.5 rounded-lg font-bold uppercase tracking-wider text-sm transition-all transform hover:-translate-y-0.5 shadow-md active:translate-y-0 cursor-pointer ${
              isSubmitted ? "text-white" : "bg-[#10b981] text-[#0f172a] hover:bg-[#34d399]"
            }`}
          >
            {isSubmitted ? "Message Saved!" : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}