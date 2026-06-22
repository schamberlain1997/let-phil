import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ExerciseCard from '../components/ExerciseCard';
import type { Exercise, ExercisesResponse } from '../types';
import { API_BASE } from '../lib/api';

const CATEGORIES = ['strength', 'cardio', 'stretching', 'plyometrics', 'powerlifting', 'strongman', 'olympic weightlifting'];

export default function Exercises() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchExercises();
  }, [search, category, page]);

  async function fetchExercises() {
    setLoading(true);
    const params = new URLSearchParams({
      page: page.toString(),
      limit: '20',
      ...(search && { search }),
      ...(category && { category }),
    });

    const res = await fetch(`${API_BASE}/api/exercises?${params}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data: ExercisesResponse = await res.json();
    setExercises(data.exercises);
    setTotalPages(data.totalPages);
    setTotal(data.total);
    setLoading(false);
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    setPage(1);
  }

  function handleCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    setCategory(e.target.value);
    setPage(1);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Exercise Library</h1>
          <p className="text-[#94a3b8] text-sm mt-1">{total} exercises available</p>
        </div>
        <button
          onClick={() => navigate('/exercises/create')}
          className="bg-[#10b981] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#059669] transition-colors"
        >
          + Create Exercise
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search exercises..."
          value={search}
          onChange={handleSearch}
          className="flex-1 bg-[#1e293b] border border-[#334155] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#10b981]"
        />
        <select
          value={category}
          onChange={handleCategory}
          className="bg-[#1e293b] border border-[#334155] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#10b981]"
        >
          <option value="">All categories</option>
          {CATEGORIES.map(c => (
            <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-center py-20 text-[#94a3b8]">Loading exercises...</div>
      ) : exercises.length === 0 ? (
        <div className="text-center py-20 text-[#94a3b8]">No exercises found.</div>
      ) : (
        <div className="space-y-4">
          {exercises.map(exercise => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-lg border border-[#334155] text-sm text-[#94a3b8] disabled:opacity-40 hover:border-[#10b981] hover:text-[#10b981] transition-colors"
          >
            Previous
          </button>
          <span className="text-sm text-[#94a3b8]">Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-lg border border-[#334155] text-sm text-[#94a3b8] disabled:opacity-40 hover:border-[#10b981] hover:text-[#10b981] transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}