import { FC } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';
import styles from './style.module.sass';
import Container from '@/components/components/Container';
import Item from './Item';

type SectionCoursesProps = {
    data: HomeContent[];
};

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       >
//         <p>jjjjjjjjjj</p>
//       </div>
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "green" }}
//         onClick={onClick}
//       />
//     );
//   }


const Specialists: FC<SectionCoursesProps> = ({ data }) => {

    const slidesItems = data[0].specialists_section.map((item: any, index: number) => (
        <Item key={item._key} item={item} index={index} />
    ));

    const settings = {
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        initialSlide: 0,
    //     nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />
    };

    return (
        <div id='specialists' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <div className={styles.title} />
                <div className={styles.specialists}>
                    <Slider {...settings}>
                        {slidesItems}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default Specialists;