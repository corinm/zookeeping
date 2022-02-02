import { Injectable } from '@nestjs/common';
import { groupBy, uniq } from 'lodash';
import { AnimalsService } from 'src/animals/animals.service';

@Injectable()
export class ScheduleService {
  constructor(private animalService: AnimalsService) {}

  async createSchedule() {
    const animals = await this.animalService.findAll();
    const animalsByFeedingTime = groupBy(animals, 'feedingTime');
    const animalsBySpeciesAndFeedingTime = Object.entries(
      animalsByFeedingTime,
    ).map(([feedingTime, a]) => [feedingTime, uniq(a.map((a) => a.species))]);

    return animalsBySpeciesAndFeedingTime;
  }
}
