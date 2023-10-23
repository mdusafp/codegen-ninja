import { PrismaClient, MartialArt, Weapon } from 'prisma/prisma-client';
import * as AAA from 'prisma/prisma-client'
import { randFullName, randCompanyName } from '@ngneat/falso'

const BUJINKAN_COUNT = 10
const PADOWAN_COUNT = 100
const SENSEI_COUNT = 30

const MARTIAL_ARTS = Object.values(MartialArt)

async function main() {
  const client = new PrismaClient();

  const generateFullName = () => randFullName({
    gender: Math.random() > 0.5 ? 'male' : 'female',
    withAccents: Math.random() > 0.5,
  })

  const randomIndex = (array: unknown[]) => Math.floor(Math.random() * array.length)

  const generateMartialArt = () => MARTIAL_ARTS[randomIndex(MARTIAL_ARTS)]

  await client.$transaction(async (tx) => {
    await tx.bujinkan.createMany({
      data: Array.from({ length: BUJINKAN_COUNT }, (v, k) => ({
        name: randCompanyName({
          locale: ''
        }),
        mainArt: generateMartialArt(),
      }))
    })

    const bujinkans = await tx.bujinkan.findMany()
    console.log("🚀 ~ file: test.ts:32 ~ awaitclient.$transaction ~ bujinkans:", bujinkans.map(o => o.name))

    await tx.sensei.createMany({
      data: Array.from({ length: SENSEI_COUNT }, (v,k) => ({
        bujinkanId: 0,
        favoriteWeapon: AAA.Weapon.Kaginawa,
        mainArt: AAA.MartialArt.Bajutsu,
        name: generateFullName(),
      }))
    })

    const senseis = await tx.sensei.findMany()
    console.log("🚀 ~ file: test.ts:32 ~ awaitclient.$transaction ~ bujinkans:", senseis.map(o => o.name))

    console.log("🚀 ~ file: test.ts:30 ~ client.$transaction ~ bujinkans:", bujinkans)

    // tx.padowan.createMany({
    //   data: [
    //     {
    //       name: generateFullName(),
    //       bujinkanId: 0,
    //       senseiId: 0,
    //     }
    //   ],
    // })
  })
  // client.padowan.createMany({
  //   data: [
  //     {
        
  //     }
  //   ]
  // })

  const padowans = Array.from({ length: 50 }, (v, k) => ({

  }))
}

main()
