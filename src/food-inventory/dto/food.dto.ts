import { IsInt, IsOptional } from 'class-validator';

export class FoodDto {
  @IsOptional()
  @IsInt()
  meat: number;

  @IsOptional()
  @IsInt()
  leaves: number;

  @IsOptional()
  @IsInt()
  fish: number;
}
