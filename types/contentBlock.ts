import type { IImage } from './image';
import type { RichTextBlocks } from './strapiRichText';
import type { Card } from './card';

export type ContentTextBlock = {
    __component: 'components.text';
    id: number;
    content?: RichTextBlocks[] | string;
    highlight?: boolean;
    spacingTop?: boolean;
    spacingBottom?: boolean;
  };
  
export type ContentHeroBlock = {
  __component: 'components.hero';
  id: number;
  content?: RichTextBlocks[] | string;
  image?: IImage;
};
  
export type SplitContentBlock = {
  __component: 'components.split-content';
  id: number;
  content?: RichTextBlocks[] | string;
  image?: IImage;
  invert?: boolean;
  spacingTop?: boolean;
  spacingBottom?: boolean;
};

export type AccreditationsBlock = {
  __component: 'components.accreditations';
  id: number;
  copy: string | RichTextBlocks[];
  hasSpaceBottom?: boolean;
  hasSpaceTop?: boolean;
  images?: IImage[];
}

export type ServicesListBlock = {
  __component: 'components.services-list';
  id?: number;
  content?: string;
  hasCta: boolean;
  ctaText: string;
  ctaLink: string;
  hasSpaceBottom: boolean;
  hasSpaceTop: boolean;
  service_lists: Card[];
}
  
export type ContentBlock = ContentTextBlock | ContentHeroBlock | SplitContentBlock | AccreditationsBlock | ServicesListBlock;