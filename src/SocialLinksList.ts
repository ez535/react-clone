export interface SocLinkItem {
    id: string;
    href: string;
    label?: string;
    icon?: string; 
}

export const SocialLinksList: SocLinkItem[] = [
    { id: 'whatsup', href: 'https://wa.me/79060616020', label: 'WhatsUp'},
    { id: 'mail', href: 'mailto:info@alfabankstore.ru', label: 'Mail'},
];