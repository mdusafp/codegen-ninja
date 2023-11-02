import { PrismaClient, Subject } from 'prisma/prisma-client';
import { randFullName, randCompanyName, randBetweenDate } from '@ngneat/falso';

const BUJINKAN_COUNT = 10;
const PADOWAN_COUNT = 100;
const SENSEI_COUNT = 30;
const LESSONS_COUNT = 60;

const SUBJECTS = Object.values(Subject);

async function main() {
  const client = new PrismaClient();

  const generateFullName = () =>
    randFullName({
      gender: Math.random() > 0.5 ? 'male' : 'female',
      withAccents: Math.random() > 0.5,
    });

  const randNumber = (min = 0, max = 100) =>
    Math.floor(Math.random() * max) + min;

  const randomIndex = (array: unknown[]) => randNumber(0, array.length);

  const generateSubject = () => SUBJECTS[randomIndex(SUBJECTS)];

  await client.$transaction(async (tx) => {
    await tx.bujinkan.createMany({
      data: Array.from({ length: BUJINKAN_COUNT }, (v, k) => ({
        name: randCompanyName({
          locale: 'ja',
        }),
      })),
    });

    const bujinkans = await tx.bujinkan.findMany();
    console.log(
      '🚀 ~ file: test.ts:32 ~ awaitclient.$transaction ~ bujinkans:',
      bujinkans.map((o) => `${o.id}. ${o.name}`)
    );

    const randomBujinkan = () => bujinkans[randomIndex(bujinkans)];

    await tx.sensei.createMany({
      data: Array.from({ length: SENSEI_COUNT }, (v, k) => ({
        name: generateFullName(),
      })),
    });

    const senseis = await tx.sensei.findMany();
    console.log(
      '🚀 ~ file: test.ts:32 ~ awaitclient.$transaction ~ senseis:',
      senseis.map((o) => `${o.id}. ${o.name}`)
    );

    const randomSensei = () => senseis[randomIndex(senseis)];

    console.log(
      '🚀 ~ file: test.ts:30 ~ client.$transaction ~ bujinkans:',
      bujinkans
    );

    await tx.padowan.createMany({
      data: Array.from({ length: PADOWAN_COUNT }, (v, k) => ({
        name: generateFullName(),
      })),
    });

    const padowans = await tx.padowan.findMany();
    console.log(
      '🚀 ~ file: test.ts:32 ~ awaitclient.$transaction ~ padowans:',
      padowans.map((o) => o.name)
    );

    const randomPadowan = () => padowans[randomIndex(padowans)];

    await tx.lesson.createMany({
      data: Array.from({ length: LESSONS_COUNT }, (v, k) => ({
        bujinkanId: randomBujinkan().id,
        lessonTime: randBetweenDate({
          from: new Date('01/11/2023'),
          to: new Date('01/11/2024'),
        }),
        senseiId: randomSensei().id,
        subject: generateSubject(),
      })),
    });

    const lessons = await tx.lesson.findMany();
    console.log(
      '🚀 ~ file: test.ts:32 ~ awaitclient.$transaction ~ lessons:',
      lessons.map((o) => `${o.bujinkanId}. ${o.subject}`)
    );

    const uniqSet = new Set<string>([]);

    await tx.padowanToLesson.createMany({
      data: lessons
        .flatMap((lesson) =>
          Array.from({ length: randNumber(1, 10) }, (v, k) => {
            const padowanId = randomPadowan().id;
            if (uniqSet.has(`${lesson.id}:${padowanId}`)) {
              return null;
            }
            uniqSet.add(`${lesson.id}:${padowanId}`);
            return {
              padowanId,
              lessonId: lesson.id,
            };
          })
        )
        .filter(Boolean),
    } as Parameters<typeof tx.padowanToLesson.createMany>[0]);
  });
}

main();
