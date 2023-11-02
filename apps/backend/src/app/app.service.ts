import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { StoreApi } from '../../../../examples/openapi-to-sdk/src';
import { Configuration } from '../../../../examples/openapi-to-sdk/src/runtime';

@Injectable()
export class AppService {
  async getData() {
    const storeApi = new StoreApi(new Configuration());
    await storeApi.deleteOrder({ orderId: 123 });
    return { message: `Users count: ${await prisma.bujinkan.count()}` };
  }
}
