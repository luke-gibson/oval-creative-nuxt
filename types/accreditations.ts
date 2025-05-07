import type { Image } from './image';

export interface Accreditations {
    id?: number;
    copy: string;
    images: Image[];
}