import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
  baseUrl: 'https://cdn.sanity.io',
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
});

export const urlFor = (source) => builder.image(source);
