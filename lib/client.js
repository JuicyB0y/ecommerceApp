import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'c4lwc5zh',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token:
    'sk3DTASeNnVWiqgPkAld5u8fDe15gqYMYwOXqp2veSs495tUG84BQdx9UCV0R2txzzFFe0TWiSYXSJ19vD2ge9uPAnVLwLaJ4tJExVhR5NlPwSOhf41brvUdCmq4yauT8ce3y6Gjk83Jdzae2BZQ5A8OGaS7PyUH9Z60obwWdxfcnejlFeFJ',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
