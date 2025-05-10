import type { IImage } from '@/types/image';
import type { RichTextBlocks } from '~/types/strapiRichText';

export interface Hero {
    id?: number;
    title?: string | RichTextBlocks[];
    image?: IImage;
}