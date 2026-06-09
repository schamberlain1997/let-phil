import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function CreateExercise() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [equipment, setEquipment] = useState('');
  const [level, setLevel] = useState('');
  const [primaryMuscles, setPrimaryMuscles] = useState('');
  const [secondaryMuscles, setSecondaryMuscles] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSaving(true);

    try {
      const res = await fetch('http://localhost:3001/api/exercises', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          category: category || null,
          equipment: equipment || null,
          level: level || null,
          primaryMuscles: primaryMuscles.split(',').map(s => s.trim()).filter(Boolean),
          secondaryMuscles: secondaryMuscles.split(',').map(s => s.trim()).filter(Boolean),
          instructions: instructions.split('\n').map(s => s.trim()).filter(Boolean),
        }),
      });

      if (!res.ok) throw new Error((await res.json()).error);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <button
        onClick={() => navigate('/')}
        className="text-[#94a3b8] hover:text-white text-sm mb-6 flex items-center gap-1 transition-colors"
      >
        ← Back to exercises
      </button>

      <h1 className="text-2xl font-bold text-white mb-6">Create Custom Exercise</h1>

      {error && (
        <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/30 rounded-lg px-3 py-2 mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs text-[#94a3b8] block mb-1">Exercise name *</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)}
            className="w-full bg-[#1e293b] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#10b981]"
            required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-[#94a3b8] block mb-1">Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)}
              className="w-full bg-[#1e293b] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#10b981]">
              <option value="">Select...</option>
              {['strength','cardio','stretching','plyometrics','powerlifting'].map(c => (
                <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs text-[#94a3b8] block mb-1">Level</label>
            <select value={level} onChange={e => setLevel(e.target.value)}
              className="w-full bg-[#1e293b] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#10b981]">
              <option value="">Select...</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-xs text-[#94a3b8] block mb-1">Equipment</label>
          <input type="text" value={equipment} onChange={e => setEquipment(e.target.value)}
            placeholder="e.g. barbell, dumbbell, bodyweight"
            className="w-full bg-[#1e293b] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#10b981]" />
        </div>

        <div>
          <label className="text-xs text-[#94a3b8] block mb-1">Primary muscles <span className="text-[#64748b]">(comma separated)</span></label>
          <input type="text" value={primaryMuscles} onChange={e => setPrimaryMuscles(e.target.value)}
            placeholder="e.g. chest, triceps"
            className="w-full bg-[#1e293b] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#10b981]" />
        </div>

        <div>
          <label className="text-xs text-[#94a3b8] block mb-1">Secondary muscles <span className="text-[#64748b]">(comma separated)</span></label>
          <input type="text" value={secondaryMuscles} onChange={e => setSecondaryMuscles(e.target.value)}
            placeholder="e.g. shoulders, core"
            className="w-full bg-[#1e293b] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#10b981]" />
        </div>

        <div>
          <label className="text-xs text-[#94a3b8] block mb-1">Instructions <span className="text-[#64748b]">(one step per line)</span></label>
          <textarea value={instructions} onChange={e => setInstructions(e.target.value)}
            rows={5}
            placeholder={"Stand with feet shoulder-width apart\nGrip the bar with both hands\nLower the weight slowly"}
            className="w-full bg-[#1e293b] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#10b981] resize-none" />
        </div>

        <button type="submit" disabled={saving}
          className="w-full bg-[#10b981] text-white rounded-lg py-2.5 text-sm font-medium hover:bg-[#059669] transition-colors disabled:opacity-50">
          {saving ? 'Saving...' : 'Create exercise'}
        </button>
      </form>
    </div>
  );
}