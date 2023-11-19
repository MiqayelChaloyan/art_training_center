import Search from '@/components/icons/Search';
import Star from '@/components/icons/Star';

import styles from './style.module.sass';

const RatingCard = ({ options }: any) => {
    return (
        <div className={styles.column} style={{ backgroundImage: `url(${options.urlForImageBackground})` }}>
            <div className={styles.fix} style={{ marginTop: `${options.top}px` }}>
                <div className={styles.card_header} style={{ marginBottom: `${options.bottom}px` }}>
                    <div className={styles.card_header_text}>
                        <p>Art House ուսումնական կենտրոն</p>
                    </div>
                    <div className={styles.card_header_icon}>
                        <Search
                            width='25'
                            height='25'
                            fill='white'
                        />
                    </div>
                </div>
                <div className={styles.card} style={{ marginLeft: `${options.left}px` }}>
                    <div className={styles.card_background} style={{ backgroundImage: `url(${options.urlForImage})` }} />
                    <div className={styles.card_content}>
                        <p className={styles.name}>{options.name}</p>
                        <div className={styles.rating}>
                            {
                                Array.from(Array(options.rating).keys()).map((star, index) => (
                                    <Star
                                        width='20'
                                        height='20'
                                        fill={star ? 'black' : 'white'}
                                        key={index}
                                    />
                                ))
                            }
                        </div>
                        <p className={styles.content}>{options.result.slice(0, 110)}...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingCard;