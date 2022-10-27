import { v4 as uuidv4 } from 'uuid';
import { Car } from '../../cars/interfaces/car.interface';


export const CAR_SEED: Car[] = [
    {
        id: uuidv4(),
        brand: 'Toyota',
        model: 'Supra-TRD'
    },
    {
        id: uuidv4(),
        brand: 'Honda',
        model: 'S-2000'
    },
    {
        id: uuidv4(),
        brand: 'Mercedes',
        model: 'SLK-350K'
    },
]