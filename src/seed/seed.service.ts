import { Injectable } from '@nestjs/common';
import { CAR_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brand.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  
  constructor(

    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,

  ) {}

  populateDB() {

    this.carsService.fillCarsWhitSeedData( CAR_SEED );
    this.brandsService.fillBrandsWhitSeedData( BRANDS_SEED );
    return 'SEED Execute';

  }

}
