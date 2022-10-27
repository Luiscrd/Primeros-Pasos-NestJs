import { v4 as uuidv4 } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
    {
        id: uuidv4(),
        name: 'toyota',
        createAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        name: 'honda',
        createAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        name: 'mercedes',
        createAt: new Date().getTime()
    }
]