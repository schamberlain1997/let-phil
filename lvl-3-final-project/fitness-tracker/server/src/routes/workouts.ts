import { Router, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { requireAuth, AuthRequest } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// POST /api/workouts
router.post('/workouts', requireAuth, async (req: AuthRequest, res: Response) => {
  const { name } = req.body;
  const workout = await prisma.workout.create({
    data: {
      name: name || `Workout ${new Date().toLocaleDateString()}`,
      userId: req.userId!,
    },
    include: {
      exercises: { include: { exercise: true, sets: true }, orderBy: { order: 'asc' } },
    },
  });
  res.status(201).json(workout);
});

// GET /api/workouts
router.get('/workouts', requireAuth, async (req: AuthRequest, res: Response) => {
  const workouts = await prisma.workout.findMany({
    where: { userId: req.userId! },
    include: {
      exercises: {
        include: { exercise: { select: { name: true } }, sets: true },
        orderBy: { order: 'asc' },
      },
    },
    orderBy: { createdAt: 'desc' },
  });
  res.json(workouts);
});

// GET /api/workouts/:id
router.get('/workouts/:id', requireAuth, async (req: AuthRequest, res: Response) => {
    const { id } = req.params as { id: string };
    const workout = await prisma.workout.findFirst({
    where: { id, userId: req.userId! },
    include: {
      exercises: {
        include: { exercise: true, sets: { orderBy: { setNumber: 'asc' } } },
        orderBy: { order: 'asc' },
      },
    },
  });
  if (!workout) return res.status(404).json({ error: 'Workout not found' });
  res.json(workout);
});

// POST /api/workouts/:id/exercises
router.post('/workouts/:id/exercises', requireAuth, async (req: AuthRequest, res: Response) => {
  const { id } = req.params as { id: string };
  const { exerciseId } = req.body;
  const workout = await prisma.workout.findFirst({
    where: { id, userId: req.userId! },
  });
  if (!workout) return res.status(404).json({ error: 'Workout not found' });

  const count = await prisma.workoutExercise.count({ where: { workoutId: id } });
  const workoutExercise = await prisma.workoutExercise.create({
    data: { workoutId: id, exerciseId, order: count },
    include: { exercise: true, sets: true },
  });
  res.status(201).json(workoutExercise);
});

// POST /api/workouts/:id/exercises/:weId/sets
router.post('/workouts/:id/exercises/:weId/sets', requireAuth, async (req: AuthRequest, res: Response) => {
  const { id, weId } = req.params as { id: string; weId: string}; 
  const { reps, weight } = req.body;
  const workoutExercise = await prisma.workoutExercise.findFirst({
    where: { id: weId, workoutId: id },
    include: { sets: true },
  });
  if (!workoutExercise) return res.status(404).json({ error: 'Not found' });

  const set = await prisma.set.create({
    data: {
      workoutExerciseId: weId,
      setNumber: workoutExercise.sets.length + 1,
      reps: reps ? parseInt(reps) : null,
      weight: weight ? parseFloat(weight) : null,
    },
  });
  res.status(201).json(set);
});

// PATCH /api/workouts/:id/complete
router.patch('/workouts/:id/complete', requireAuth, async (req: AuthRequest, res: Response) => {
  const { id } = req.params as { id: string};  
  const workout = await prisma.workout.findFirst({
    where: { id, userId: req.userId! },
  });
  if (!workout) return res.status(404).json({ error: 'Workout not found' });
  const updated = await prisma.workout.update({
    where: { id },
    data: { completedAt: new Date() },
  });
  res.json(updated);
});

// DELETE /api/workouts/:id
router.delete('/workouts/:id', requireAuth, async (req: AuthRequest, res: Response) => {
  const { id } = req.params as { id: string }  
  const workout = await prisma.workout.findFirst({
    where: { id, userId: req.userId! },
  });
  if (!workout) return res.status(404).json({ error: 'Workout not found' });
  await prisma.workout.delete({ where: { id } });
  res.json({ success: true });
});

export default router;