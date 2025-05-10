import type { IImage } from './image';
import type { RichTextBlocks } from '~/types/strapiRichText';

export interface Accreditations {
    id?: number;
    copy: string | RichTextBlocks[];
    hasSpaceBottom: boolean;
    hasSpaceTop: boolean;
    images: IImage[];
}