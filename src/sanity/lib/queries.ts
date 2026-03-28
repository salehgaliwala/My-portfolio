import { groq } from 'next-sanity';

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  description,
  technologies,
  githubUrl,
  demoUrl,
  featured
}`;

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  excerpt,
  author-> {
    name,
    image
  }
}`;

export const settingsQuery = groq`*[_type == "settings"][0] {
  title,
  description,
  author,
  bio,
  profileImage,
  socials
}`;
