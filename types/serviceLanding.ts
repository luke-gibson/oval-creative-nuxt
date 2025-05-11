import type { IImage } from './image';
import type { ContentBlock } from './contentBlock';

export interface ServiceLandingData {
  data: {
    id: number;
    title?: string;
    description?: string;
    image: IImage;
    content: ContentBlock[];
  }
}