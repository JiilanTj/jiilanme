import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { posts } from '../data/posts';

export function GET(context: APIContext) {
  return rss({
    title: 'Jiilan Nashrulloh Tanjung',
    description: 'Software Engineer · Physicist · Researcher. Writing about theoretical CS, physics, and systems engineering.',
    site: context.site!.toString(),
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.date),
      description: post.description,
      link: `/writing/${post.slug}/`,
    })),
    customData: '<language>en</language>',
  });
}
