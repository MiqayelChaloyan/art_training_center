import { FC, useCallback } from 'react';
import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';
import { generateImageUrl } from '@/utils/imageGenerate';
import Search from '@/components/icons/Search';
import Star from '@/components/icons/Star';
import styles from './OurRating.module.sass';
import Slider from 'react-slick';

type OurRatingProps = {
    data: HomeContent[];
};

const concatenateTextWithFilter = (arg: any) => {
    return arg.reduce((text: string, item: any) => {
        if (item.text) {
            text += item.text;
        }
        return text;
    }, '');
};

const OurRating: FC<OurRatingProps> = ({ data }) => {
    const feedbacks = data[0].our_rating_section.map((item: any, index: number) => {
        const result = concatenateTextWithFilter(item?.user_feedback[0].children);

        return (
            <div className={styles.column} key={item._key} style={{ backgroundImage: `url(${generateImageUrl(item.our_rating_section_image.asset._ref)})` }}>
                <div className={styles.card} style={{ marginTop: `${index * 30}px` }}>
                    <div className={styles.title_content} style={{ marginBottom: `${2 * (index + 20)}px` }}>
                        <div className={styles.content_view_title}>
                            <p>Art House ուսումնական կենտրոն</p>
                        </div>
                        <div className={styles.content_view_icon}>
                            <Search
                                width='25'
                                height='25'
                                fill='white'
                            />
                        </div>
                    </div>
                    <div className={styles.header} style={{ marginLeft: `${index * 10}px` }}>
                        <div className={styles.header_image_container}>
                            <img src={generateImageUrl(item.user_image.asset._ref)} className={styles.header_image} />
                        </div>
                        <div className={styles.header_description_container}>
                            <p className={styles.user_name}>{item.user_name}</p>
                            <div className={styles.rating}>
                                {
                                    [true, true, true, true, false].map((star, index) => (
                                        <Star
                                            width='20'
                                            height='20'
                                            fill={star ? 'black' : 'white'}
                                            key={index}
                                        />
                                    ))
                                }
                            </div>
                            <p className={styles.content}>{result.slice(0, 120)}...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    const settingsSlider = {
        arrows: false,
        dots: true,
        centerMode: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
    };

    return (
        <div id='feedbacks' className={styles.container}>
            <h1 className={styles.title}>OUR RATING</h1>
            <div className={styles.feedbacks}>
                <div className={styles.row}>
                    {feedbacks}
                </div>
                <div>
                    <Slider {...settingsSlider} className={styles.slider}>
                        {feedbacks}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default OurRating;