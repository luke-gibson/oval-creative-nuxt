import type { RichTextBlocks } from '~/types/strapiRichText';

export interface Text {
    id?: number;
    copy?: string | RichTextBlocks[];
    hasCta?: boolean;
    ctaHasArrow?: boolean;
    ctaLink?: string;
    shortWidth?: boolean;
    hasSpaceBottom?: boolean;
    hasSpaceTop?: boolean;
}