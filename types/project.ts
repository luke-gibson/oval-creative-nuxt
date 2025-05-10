import type { IImage } from './image';
import type { ContentBlock } from './contentBlock';

export interface ProjectData {
    data: {
      title?: string;
      description?: string;
      image: IImage;
      content: ContentBlock[];
    };
  }