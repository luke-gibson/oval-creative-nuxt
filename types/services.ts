import type { Card } from '@/types/card'
import type { RichTextBlocks } from '~/types/strapiRichText';

export interface Services {
    id?: number;
    content: string | RichTextBlocks[];
    hasCta: boolean;
    ctaText: string;
    ctaLink: string;
    hasSpaceBottom: boolean;
    hasSpaceTop: boolean;
    service_lists: Card[];
}