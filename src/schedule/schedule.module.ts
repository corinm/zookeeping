import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { AnimalsModule } from '../animals/animals.module';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService],
  imports: [AnimalsModule],
})
export class ScheduleModule {}
