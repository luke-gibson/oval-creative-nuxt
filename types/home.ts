import type { IImage } from './image';

export interface HomeData {
    data: {
      title?: string;
      description?: string;
      image: IImage;
    //   content: ContentBlock[];
    //   services?: ServiceData[];
    };
  }