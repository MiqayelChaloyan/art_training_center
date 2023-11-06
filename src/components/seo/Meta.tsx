import { FC, PropsWithChildren } from 'react';

import { DefaultSeo } from 'next-seo';

const seoTitle = 'ART Training Center';
const seoDescription = 'ART Training Center, based in Armenia, is a recognized outsourcing company providing superior web and mobile solutions, along with comprehensive quality assurance services. Our expertise spans across custom software development and cutting-edge technologies like artificial intelligence and machine learning. With a team of seasoned professionals, we\'re committed to helping businesses streamline their operations and drive growth. Engage with Dwin Technology for innovative digital solutions and unparalleled quality assurance that will give your business a competitive edge in the global marketplace.';
const seoUrl = 'https://www.dwin.tech/';
const seoOGImage = 'https://images.squarespace-cdn.com/content/v1/63ed0c8e54d11151a02d1803/52c3f2b6-fbf3-469b-880f-bb3181827cc0/Training%2BCenter%2BConference%2BRoom%2BMockup.jpg';
const seoOGImageAlt = 'ART Training Center';
const seoSiteName = 'ART Center';
const seoLocale = 'en';

const Meta: FC<PropsWithChildren> = ({ children }) => {
	return <>
		<DefaultSeo
			title={seoTitle}
			description={seoDescription}
			canonical={seoUrl}
			openGraph={{
				url: seoUrl,
				title: seoTitle,
				description: seoDescription,
				images: [
					{
						url: seoOGImage,
						width: 500,
						height: 500,
						alt: seoOGImageAlt,
					},
				],
				siteName: seoSiteName,
				type: 'website',
				locale: seoLocale
			}}
		/>
		{children}
	</>;
};

export default Meta;