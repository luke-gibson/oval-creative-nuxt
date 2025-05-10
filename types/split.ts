import type { IImage } from './image';
import type { RichTextBlocks } from '~/types/strapiRichText';

export interface Split {
    id?: number;
    copy?: string | RichTextBlocks[];
    image?: IImage;
    invert?: boolean;
    hasSpaceBottom?: boolean;
    hasSpaceTop?: boolean;
}