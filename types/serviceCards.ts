import type { Card } from '@/types/card'

export interface ServiceCards {
    id?: number;
    title: string;
    hasCta: boolean;
    services: Card[];
}