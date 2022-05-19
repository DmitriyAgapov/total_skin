export type Post = {
    id: string;
    title: string;
    slug: string;
};

export type Section = {
    id: string;
    subtitle: string;
    title: string;
    type: string;
    style: object;
    url: string;
    image: object;
    variant: string
    items: [];
    background?: object;
    video?: object;
    content?: object;
    pricing?: any;
    collapsable: any;
    page?: object;
    contacts?: any;
};