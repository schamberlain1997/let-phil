import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import RestTimer from '../components/RestTimer';
import type { Workout, WorkoutExerciseEntry, Exercise } from '../types';

export default function ActiveWorkout() {
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [workoutName, setWorkoutName] = useState('');
  const [showTimer, setShowTimer] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [pickerSearch, setPickerSearch] = useState('');
  const [pickerResults, setPickerResults] = useState<Exercise[]>([]);
  const [setInputs, setSetInputs] = useState<Record<string, { reps: string; weight: string }>>({});
  const [saving, setSaving] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();
  const API = 'http://localhost:3001/api';

  useEffect(() => {
    if (pickerSearch.length < 2) { setPickerResults([]); return; }
    const timeout = setTimeout(async () => {
      const res = await fetch(`${API}/exercises?search=${pickerSearch}&limit=8`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setPickerResults(data.exercises || []);
    }, 300);
    return () => clearTimeout(timeout);
  }, [pickerSearch]);

  async function startWorkout() {
    const name = workoutName.trim() || `Workout ${new Date().toLocaleDateString()}`;
    const res = await fetch(`${API}/workouts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    setWorkout(data);
  }

  async function addExercise(exercise: Exercise) {
    if (!workout) return;
    const res = await fetch(`${API}/workouts/${workout.id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ exerciseId: exercise.id }),
    });
    const newEntry = await res.json();
    setWorkout(w => w ? { ...w, exercises: [...w.exercises, newEntry] } : w);
    setShowPicker(false);
    setPickerSearch('');
    setPickerResults([]);
  }

  async function logSet(weId: string) {
    if (!workout) return;
    const input = setInputs[weId] || { reps: '', weight: '' };
    if (!input.reps && !input.weight) return;

    const res = await fetch(`${API}/workouts/${workout.id}/exercises/${weId}/sets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ reps: input.reps || null, weight: input.weight || null }),
    });
    const newSet = await res.json();
    setWorkout(w => {
      if (!w) return w;
      return {
        ...w,
        exercises: w.exercises.map(ex =>
          ex.id === weId ? { ...ex, sets: [...ex.sets, newSet] } : ex
        ),
      };
    });
    setSetInputs(prev => ({ ...prev, [weId]: { reps: '', weight: '' } }));
    setShowTimer(true);
  }

  async function finishWorkout() {
    if (!workout) return;
    setSaving(true);
    await fetch(`${API}/workouts/${workout.id}/complete`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}` },
    });
    setSaving(false);
    navigate('/workout-log');
  }

  if (!workout) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">
        <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-8 w-full max-w-sm text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Start a Workout</h1>
          <p className="text-[#94a3b8] text-sm mb-6">Name your session or leave blank for a default name</p>
          <input
            type="text"
            value={workoutName}
            onChange={e => setWorkoutName(e.target.value)}
            placeholder="e.g. Push Day, Leg Day..."
            className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#10b981] mb-4"
            onKeyDown={e => e.key === 'Enter' && startWorkout()}
          />
          <button onClick={startWorkout}
            className="w-full bg-[#10b981] text-white rounded-lg py-2.5 text-sm font-medium hover:bg-[#059669] transition-colors">
            Start Workout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">{workout.name}</h1>
          <p className="text-[#94a3b8] text-sm mt-1">{workout.exercises.length} exercise{workout.exercises.length !== 1 ? 's' : ''}</p>
        </div>
        <button onClick={finishWorkout} disabled={saving}
          className="bg-[#10b981] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#059669] transition-colors disabled:opacity-50">
          {saving ? 'Saving...' : 'Finish Workout'}
        </button>
      </div>

      <div className="space-y-4 mb-6">
        {workout.exercises.map((entry: WorkoutExerciseEntry) => (
          <div key={entry.id} className="bg-[#1e293b] border border-[#334155] rounded-xl p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-white font-medium">{entry.exercise.name}</h3>
                <p className="text-[#94a3b8] text-xs mt-0.5">
                  {entry.exercise.equipment || 'Bodyweight'} · {entry.exercise.primaryMuscles.join(', ')}
                </p>
              </div>
              <span className="text-xs text-[#94a3b8]">{entry.sets.length} sets</span>
            </div>

            {entry.sets.length > 0 && (
              <div className="mb-4">
                <div className="grid grid-cols-3 text-xs text-[#64748b] mb-1 px-1">
                  <span>Set</span><span>Reps</span><span>Weight</span>
                </div>
                {entry.sets.map(set => (
                  <div key={set.id} className="grid grid-cols-3 text-sm text-[#94a3b8] bg-black/20 rounded px-1 py-1.5 mb-1">
                    <span className="text-white font-medium">{set.setNumber}</span>
                    <span>{set.reps ?? '—'}</span>
                    <span>{set.weight ? `${set.weight} kg` : '—'}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Reps"
                value={setInputs[entry.id]?.reps || ''}
                onChange={e => setSetInputs(prev => ({
                  ...prev,
                  [entry.id]: { ...prev[entry.id], reps: e.target.value }
                }))}
                className="flex-1 bg-[#0f172a] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#10b981]"
              />
              <input
                type="number"
                placeholder="kg"
                value={setInputs[entry.id]?.weight || ''}
                onChange={e => setSetInputs(prev => ({
                  ...prev,
                  [entry.id]: { ...prev[entry.id], weight: e.target.value }
                }))}
                className="flex-1 bg-[#0f172a] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#10b981]"
              />
              <button onClick={() => logSet(entry.id)}
                className="bg-[#10b981] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#059669] transition-colors">
                + Set
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => setShowPicker(true)}
        className="w-full border border-dashed border-[#334155] text-[#94a3b8] hover:border-[#10b981] hover:text-[#10b981] rounded-xl py-4 text-sm transition-colors">
        + Add Exercise
      </button>

      {showTimer && <RestTimer onClose={() => setShowTimer(false)} />}

      {showPicker && (
        <div className="fixed inset-0 bg-black/60 flex items-end justify-center z-40 p-4"
          onClick={e => { if (e.target === e.currentTarget) setShowPicker(false); }}>
          <div className="bg-[#1e293b] border border-[#334155] rounded-xl w-full max-w-lg p-5 max-h-[70vh] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-medium">Add Exercise</h3>
              <button onClick={() => setShowPicker(false)} className="text-[#94a3b8] hover:text-white text-xl">×</button>
            </div>
            <input
              type="text"
              placeholder="Search exercises..."
              value={pickerSearch}
              onChange={e => setPickerSearch(e.target.value)}
              autoFocus
              className="bg-[#0f172a] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#10b981] mb-3"
            />
            <div className="overflow-y-auto space-y-2">
              {pickerSearch.length < 2 && (
                <p className="text-[#64748b] text-sm text-center py-4">Type at least 2 characters to search</p>
              )}
              {pickerResults.map(ex => (
                <button key={ex.id} onClick={() => addExercise(ex)}
                  className="w-full text-left bg-[#0f172a] hover:bg-[#334155] border border-[#334155] rounded-lg px-4 py-3 transition-colors">
                  <p className="text-white text-sm font-medium">{ex.name}</p>
                  <p className="text-[#94a3b8] text-xs mt-0.5">
                    {ex.equipment || 'Bodyweight'} · {ex.primaryMuscles.join(', ')}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}