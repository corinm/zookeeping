import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';
import { FoodInventoryModule } from './food-inventory/food-inventory.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [AnimalsModule, FoodInventoryModule, ScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
