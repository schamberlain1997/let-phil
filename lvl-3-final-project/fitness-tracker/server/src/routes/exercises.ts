import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { requireAuth, AuthRequest } from '../middleware/auth';
import { Response } from 'express';

const router = Router();
const prisma = new PrismaClient();

// GET /api/exercises?search=&category=&page=1&limit=20
router.get('/exercises', async (req, res) => {
  const { search, category, page = '1', limit = '20' } = req.query;
  const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

  const where: any = {};
  if (search) {
    where.name = { contains: search as string, mode: 'insensitive' };
  }
  if (category) {
    where.category = { equals: category as string, mode: 'insensitive' };
  }

  const [exercises, total] = await Promise.all([
    prisma.exercise.findMany({
      where,
      skip,
      take: parseInt(limit as string),
      orderBy: { name: 'asc' },
    }),
    prisma.exercise.count({ where }),
  ]);

  res.json({
    exercises,
    total,
    page: parseInt(page as string),
    totalPages: Math.ceil(total / parseInt(limit as string)),
  });
});

// GET /api/exercises/:id
router.get('/exercises/:id', async (req, res) => {
  const exercise = await prisma.exercise.findUnique({
    where: { id: req.params.id },
  });
  if (!exercise) return res.status(404).json({ error: 'Exercise not found' });
  res.json(exercise);
});

// POST /api/exercises  (protected — custom exercises)
router.post('/exercises', requireAuth, async (req: AuthRequest, res: Response) => {
  const { name, category, equipment, level, primaryMuscles, secondaryMuscles, instructions } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const exercise = await prisma.exercise.create({
    data: {
      name,
      category: category || null,
      equipment: equipment || null,
      level: level || null,
      primaryMuscles: primaryMuscles || [],
      secondaryMuscles: secondaryMuscles || [],
      instructions: instructions || [],
      images: [],
      isCustom: true,
      createdById: req.userId,
    },
  });

  res.status(201).json(exercise);
});

export default router;