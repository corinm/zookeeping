import { Module } from '@nestjs/common';
import { FoodInventoryService } from './food-inventory.service';
import { FoodInventoryController } from './food-inventory.controller';

@Module({
  controllers: [FoodInventoryController],
  providers: [FoodInventoryService]
})
export class FoodInventoryModule {}
