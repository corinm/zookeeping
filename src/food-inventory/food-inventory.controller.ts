import { Body, Controller, Get, Post } from '@nestjs/common';
import { FoodDto } from './dto/food.dto';
import { FoodInventoryService } from './food-inventory.service';

@Controller('food-inventory')
export class FoodInventoryController {
  constructor(private readonly foodInventoryService: FoodInventoryService) {}

  @Post('/buy-food')
  buyFood(@Body() foodDto: FoodDto) {
    return this.foodInventoryService.buyFood(foodDto);
  }

  @Post('/fill-buckets')
  fillBuckets(@Body() foodDto: FoodDto) {
    return this.foodInventoryService.fillBuckets(foodDto);
  }

  @Get()
  checkFoodInventory() {
    return this.foodInventoryService.checkFoodInventory();
  }
}
