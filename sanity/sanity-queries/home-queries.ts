export interface HomeContent {
    _id: string;
    main_section: [{
        main_section_image(main_section_image: any): { slideImgUrl: any; };
        articleImage: any;
        content: any; subtitle: string
    }, { content: [{ children: [{ text: string }] }] }];
    about_us_title: string;
    about_us_content: [{ content: [{ children: [{ text: string }] }] }];
    news_section: [{
        articleImage: any;
        content: any; subtitle: string
    }, { content: [{ children: [{ text: string }] }] }];
}

export const homeContentQuery = `{
    _id,
    main_section,
    about_us_title,
    about_us_content,
    news_section,
}`;