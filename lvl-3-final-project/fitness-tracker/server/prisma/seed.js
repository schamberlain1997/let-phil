const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  process.stdout.write('Checking existing exercises...\n');

  const count = await prisma.exercise.count();
  process.stdout.write(`Found ${count} existing exercises\n`);

  if (count > 0) {
    process.stdout.write('Already seeded — skipping.\n');
    return;
  }

  process.stdout.write('Fetching from free-exercise-db...\n');
  const res = await fetch(
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json'
  );

  if (!res.ok) {
    process.stdout.write(`Fetch failed: ${res.status} ${res.statusText}\n`);
    return;
  }

  const exercises = await res.json();
  process.stdout.write(`Fetched ${exercises.length} exercises. Inserting...\n`);

  await prisma.exercise.createMany({
    data: exercises.map((e) => ({
      name: e.name,
      category: e.category || null,
      equipment: e.equipment || null,
      level: e.level || null,
      force: e.force || null,
      mechanic: e.mechanic || null,
      primaryMuscles: e.primaryMuscles || [],
      secondaryMuscles: e.secondaryMuscles || [],
      instructions: e.instructions || [],
      images: e.images || [],
      isCustom: false,
    })),
    skipDuplicates: true,
  });

  const final = await prisma.exercise.count();
  process.stdout.write(`Done — ${final} exercises in database.\n`);
}

main()
  .catch((e) => process.stdout.write(`Error: ${e.message}\n`))
  .finally(() => prisma.$disconnect());