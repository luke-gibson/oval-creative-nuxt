import type { IImage } from './image';
import type { RichTextBlocks } from '~/types/strapiRichText';

export interface ProjectCard {
    id?: number;
    slug?: string;
    name: string;
    image?: IImage;
    description: string | RichTextBlocks[];
  }