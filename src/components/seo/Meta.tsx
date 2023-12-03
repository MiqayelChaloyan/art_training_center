import { FC, PropsWithChildren } from 'react';

import { DefaultSeo } from 'next-seo';

const seoTitle = 'ART Training Center';
const seoDescription = 'Through immersive classes, ART teaches you the skills you need in your future career as a successful and competitive professional.';
const seoUrl = 'https://art-training-center.vercel.app/en';
const seoOGImage = 'https://images.squarespace-cdn.com/content/v1/63ed0c8e54d11151a02d1803/52c3f2b6-fbf3-469b-880f-bb3181827cc0/Training%2BCenter%2BConference%2BRoom%2BMockup.jpg';
const seoOGImageAlt = 'ART Training Center';
const seoSiteName = 'ART Training Center';
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