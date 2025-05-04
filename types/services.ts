import type { Card } from '@/types/card'

export interface Services {
    id?: number;
    title: string;
    hasCta: boolean;
    serviceList: Card[];
}