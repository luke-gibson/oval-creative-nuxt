import type { IImage } from './image';
import type { ContentBlock } from './contentBlock';

export interface PrivacyData {
    data: {
      seo: {
        title?: string;
        description?: string;
        image: IImage;
      }
      content: ContentBlock[];
    };
  }