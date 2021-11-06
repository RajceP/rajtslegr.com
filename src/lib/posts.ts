import { ContentPostData, PostData, PostId } from '@/types/entities';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import readingTime from 'reading-time';
import { getBlogViews } from './blog-views';

const postsDirectory = path.join(process.cwd(), 'src/data/blog');

export const getSortedPostsData = async (): Promise<PostData[]> => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = [];

  for await (const fileName of fileNames) {
    const id = fileName.replace(/\.mdx$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { content, data } = matter(fileContents);

    const views = await getBlogViews(id);

    allPostsData.push({
      id,
      ...data,
      readingTime: readingTime(content),
      views,
    } as PostData);
  }

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllPostIds = (): PostId[] => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
};

export const getPostData = async (id: string): Promise<ContentPostData> => {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { content, data } = matter(fileContents);

  const mdxContent = await serialize(content, {
    mdxOptions: { rehypePlugins: [mdxPrism] },
  });

  return {
    id,
    mdxContent,
    ...data,
  } as ContentPostData;
};
