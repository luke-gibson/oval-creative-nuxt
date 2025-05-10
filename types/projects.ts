import type { ProjectCard } from '@/types/projectCard'
import type { RichTextBlocks } from '~/types/strapiRichText';

export interface Projects {
    id?: number;
    hasSpaceBottom: boolean;
    hasSpaceTop: boolean;
    project_lists: ProjectCard[];
}