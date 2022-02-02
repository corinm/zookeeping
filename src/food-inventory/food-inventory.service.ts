import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class FoodInventoryService {
  private meat = 0;
  private leaves = 0;
  private fish = 0;

  buyFood({ meat, leaves, fish }) {
    if (meat) this.meat += meat;
    if (leaves) this.leaves += leaves;
    if (fish) this.fish += fish;
  }

  fillBuckets({ meat, leaves, fish }) {
    if (this.meat < meat) {
      throw new HttpException('Not enough meat!', 406);
    }
    if (this.leaves < leaves) {
      throw new HttpException('Not enough leaves!', 406);
    }
    if (this.fish < fish) {
      throw new HttpException('Not enough fish!', 406);
    }

    this.meat -= meat;
    this.leaves -= leaves;
    this.fish -= fish;

    return { meat, leaves, fish };
  }

  checkFoodInventory() {
    return {
      meat: this.meat,
      leaves: this.leaves,
      fish: this.fish,
    };
  }
}
