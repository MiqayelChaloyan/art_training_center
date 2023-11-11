export interface HomeContent {
    _id: string;
    main_section: [{
        main_section_image(main_section_image: any): { slideImgUrl: any; };
        articleImage: any;
        content: any; subtitle: string
    }, { content: [{ children: [{ text: string }] }] }];
    about_us_title: string;
    about_us_content:  [{
        content: [{
            children: [{
                text: string;
            }];
        }];
    }],
    cooking_courses_video_url: string;
    cooking_courses_video_light: string;
    news_section: [{
        content: any; subtitle: string
    }, { content: [{ children: [{ text: string }] }] }];
    specialists_section: any
}

export const homeContentQuery = `{
    _id,
    main_section,
    about_us_title,
    about_us_content,
    cooking_courses_video_url,
    cooking_courses_video_light,
    news_section,
    specialists_section,
}`;