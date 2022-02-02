import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { promises } from 'fs';
import { join } from 'path';

const { readFile } = promises;

const addAnimal = async (animal: CreateAnimalDto) => {
  const existingAnimals = await readFile('./data.json');
};
const getAnimals = async (): Promise<CreateAnimalDto[]> => {
  const file = await readFile(join(__dirname, './data.json'), 'utf8');
  const existingAnimals = JSON.parse(file) as CreateAnimalDto[];
  return existingAnimals || [];
};

@Injectable()
export class AnimalsService {
  private animals: CreateAnimalDto[] = [];

  async create(createAnimalDto: CreateAnimalDto) {
    return this.animals.push(createAnimalDto);
  }

  async findAll() {
    const animals: CreateAnimalDto[] = await getAnimals();
    return animals;
  }

  findOne(id: number) {
    return `This action returns a #${id} animal`;
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  }
}
