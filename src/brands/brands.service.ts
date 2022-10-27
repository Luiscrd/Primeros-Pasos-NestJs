import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BrandsService {

  private brands : Brand[] = [

  ]

  create(createBrandDto: CreateBrandDto) {

    const brand: Brand = {
      id: uuidv4(),
      name: createBrandDto.name.toLowerCase(),
      createAt: new Date().getTime()
    }

    this.brands.push( brand );

    return brand;

  }

  findAll() {
    
    return this.brands;

  }

  findOne( id: string ) {

    const brand = this.brands.find( brand => brand.id === id );

    if ( !brand ) throw new NotFoundException(`Brand whit id '${ id }' not exist`);

    return brand;

  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    
    let brandDB = this.findOne( id );

    this.brands = this.brands.map( brand => {

      if ( brand.id === id ) {

        brandDB.updateAt = new Date().getTime();

        brandDB = { ...brandDB, ...updateBrandDto };

        return brandDB;

      }

      return brand;

    })

    return brandDB;

  }

  remove( id: string ) {

    this.brands = this.brands.filter( brand => brand.id !== id );

  }

  fillBrandsWhitSeedData( brands: Brand[] ) {

    this.brands = brands;
    
  }

}
