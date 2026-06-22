import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { Workout } from '../types';
import { API_BASE } from '../lib/api';


export default function WorkoutLog() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE}/api/workouts`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => r.json())
      .then(data => { setWorkouts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  function totalSets(workout: Workout) {
    return workout.exercises.reduce((sum, ex) => sum + ex.sets.length, 0);
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric',
    });
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Workout Log</h1>
          <p className="text-[#94a3b8] text-sm mt-1">{workouts.length} sessions logged</p>
        </div>
        <button onClick={() => navigate('/workout')}
          className="bg-[#10b981] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#059669] transition-colors">
          + Start Workout
        </button>
      </div>

      {loading ? (
        <p className="text-[#94a3b8] text-center py-12">Loading...</p>
      ) : workouts.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-[#334155] rounded-xl">
          <p className="text-[#94a3b8] mb-4">No workouts logged yet</p>
          <button onClick={() => navigate('/workout')}
            className="text-[#10b981] text-sm hover:underline">
            Start your first workout →
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {workouts.map(workout => (
            <div key={workout.id} className="bg-[#1e293b] border border-[#334155] rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setExpanded(expanded === workout.id ? null : workout.id)}
              >
                <div>
                  <p className="text-white font-medium">{workout.name}</p>
                  <p className="text-[#94a3b8] text-xs mt-0.5">
                    {formatDate(workout.createdAt)} · {workout.exercises.length} exercises · {totalSets(workout)} sets
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {workout.completedAt && (
                    <span className="text-xs text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/20 px-2 py-0.5 rounded-full">
                      Done
                    </span>
                  )}
                  <span className="text-[#94a3b8] text-sm">{expanded === workout.id ? '▲' : '▼'}</span>
                </div>
              </button>

              {expanded === workout.id && (
                <div className="px-5 pb-4 border-t border-[#334155]">
                  {workout.exercises.length === 0 ? (
                    <p className="text-[#64748b] text-sm py-3">No exercises logged</p>
                  ) : (
                    workout.exercises.map(entry => (
                      <div key={entry.id} className="pt-3">
                        <p className="text-white text-sm font-medium mb-2">{entry.exercise.name}</p>
                        {entry.sets.length > 0 ? (
                          <div className="space-y-1">
                            <div className="grid grid-cols-3 text-xs text-[#64748b] px-1 mb-1">
                              <span>Set</span><span>Reps</span><span>Weight</span>
                            </div>
                            {entry.sets.map(set => (
                              <div key={set.id} className="grid grid-cols-3 text-sm text-[#94a3b8] bg-black/20 rounded px-1 py-1.5">
                                <span className="text-white">{set.setNumber}</span>
                                <span>{set.reps ?? '—'}</span>
                                <span>{set.weight ? `${set.weight} kg` : '—'}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-[#64748b] text-xs">No sets logged</p>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}