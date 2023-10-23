import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

@Injectable()
export class AppService {
  async getData() {
    return { message: `Users count: ${await prisma.bujinkan.count()}` }
  }
}
