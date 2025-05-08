export interface CaseStudyCard {
    id?: number;
    copy: string;
    image: string;
    alt: string;

    brandLogoUrl?: string;
    brandLogoAlt?: string;

    hasCta: boolean;
    hasCtaIcon: boolean;
    ctaText: string;
    link: string;

    hasSpaceBottom: boolean;
    hasSpaceTop: boolean;
}