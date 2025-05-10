import type { RichTextBlocks } from '~/types/strapiRichText';
import type { IImage } from './image';

export interface CaseStudyCard {
    id?: number;
    copy: string | RichTextBlocks[];
    image: IImage;
    brandLogo?: IImage;
    hasCta: boolean;
    hasCtaIcon: boolean;
    ctaText: string;
    link?: string;
    hasSpaceBottom: boolean;
    hasSpaceTop: boolean;
}