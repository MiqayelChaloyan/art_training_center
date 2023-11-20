export interface Courses {
    id: string | undefined;
    _id: string;
    name: string;
    course_main: [{
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
    course_process_video_url: string;
    course_process_video_light: any;
    student_work_section: any;
    svg: any,
    _type: string;
    _updatedAt: string;
    slug: { current: string };
}

export const CoursesQuery = `{
    _id,
    name,
    course_main,
    about_us_title,
    about_us_content,
    course_process_video_url,
    course_process_video_light,
    price_list,
    student_work_section,
    svg,
    _type,
    _updatedAt,
    "slug": slug.current
}`;
