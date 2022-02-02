import {
  IsIn,
  IsInt,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateAnimalDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(['otter', 'cat', 'lion', 'tiger', 'bear', 'panda'])
  species: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  age: number;

  @IsNotEmpty()
  @IsString()
  emoji: string;

  @IsNotEmpty()
  @IsMilitaryTime()
  feedingTime: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['carnivore', 'herbivore', 'omnivore'])
  diet: 'carnivore' | 'herbivore' | 'omnivore';
}
