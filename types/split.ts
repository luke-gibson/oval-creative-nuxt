import type { Image } from './image';

export interface Split {
    id?: number;
    copy: string;
    image: Image;
    invert: boolean;
    hasSpaceBottom: boolean;
    hasSpaceTop: boolean;
}