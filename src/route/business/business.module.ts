// vendor.module.ts

import { Module } from '@nestjs/common';
import { BusinessController } from './v1/business.controller';
import { DatabaseModule } from 'src/database/database.module';
import { BusinessService } from './business.service';

@Module({
    imports: [ DatabaseModule ],
    controllers: [ BusinessController ],
    providers: [ BusinessService ],
})
export class BusinessModule { }
