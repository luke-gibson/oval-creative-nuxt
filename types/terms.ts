import type { IImage } from './image';
import type { ContentBlock } from './contentBlock';

export interface TermsData {
    data: {
      seo: {
        title?: string;
        description?: string;
        image: IImage;
      }
      content: ContentBlock[];
    };
  }