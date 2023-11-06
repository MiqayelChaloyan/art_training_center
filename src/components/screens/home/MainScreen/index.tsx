import { FC } from 'react';
import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';
import useConvertData from '@/hooks/useConvertData';
import styles from './MainScreen.module.sass';
import Button from '@/components/ui/Button';

type MainProps = {
	data: HomeContent[];
}

const MainScreen: FC<MainProps> = ({ data }) => {
	const { slideImgUrl, alt } = useConvertData(data[0]);

	return (
		<div id='main-screen' className={styles.screen}>
			<div className={styles.main}>
				<img src={slideImgUrl} alt={alt} className={styles.mainImage} />
				<div className={styles.content}>
					<h1 className={styles.title}>{data[0].mainTitle}</h1>
					<p className={styles.description}>{data[0].mainDescription}</p>
					<Button
						className={styles.btn}
						text='Contact Us'
						onClick={() => console.log('click')}
					/>
				</div>
			</div>
		</div>
	);
};

export default MainScreen;
