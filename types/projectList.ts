import type { ProjectCard } from '@/types/projectCard'

export interface ProjectList {
    id?: number;
    hasSpaceBottom: boolean;
    hasSpaceTop: boolean;
    project_lists?: ProjectCard[];
}