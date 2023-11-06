export interface HomeContent {
    _id: string;
    mainTitle: string;
    mainImage: { asset: { _ref: string }, alt: string };
    mainDescription: string;
    aboutUsTitle: string;
    aboutUsContent: [{ content: [{ children: [{ text: string }] }] }];
}

export const homeContentQuery = `{
    _id,
    mainTitle,
    mainImage,
    mainDescription,
    aboutUsTitle,
    aboutUsContent,
}`;