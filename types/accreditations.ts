import type { Image } from './image';

export interface Accreditations {
    id?: number;
    copy: string;
    hasSpaceBottom: boolean;
    hasSpaceTop: boolean;
    images: Image[];
}