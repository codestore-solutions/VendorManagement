import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PRISMA_CLIENT } from 'src/assets/constants';

@Module({
  providers: [
    {
      provide: PRISMA_CLIENT,
      useValue: new PrismaClient(),
    },
  ],
  exports: [ PRISMA_CLIENT ],
})
export class DatabaseModule { }
