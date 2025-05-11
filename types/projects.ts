import type { ProjectCard } from '@/types/projectCard'

export interface Projects {
    id?: number;
    hasSpaceBottom: boolean;
    hasSpaceTop: boolean;
    project_lists?: ProjectCard[];
}