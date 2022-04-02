import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

import { ContentPostData } from '@/types/entities';
import parseDate from '@/utils/date';

import hero from '../../../public/static/images/hero.jpg';

interface Props {
  postData: ContentPostData;
}

const PostLayout: React.FC<Props> = ({
  postData: { title, date, mdxContent, image },
}) => (
  <div className="mx-auto flex max-w-2xl flex-col items-center">
    <article className="w-full max-w-none text-black dark:text-white">
      <h1 className="text-4xl font-bold tracking-tight text-black dark:text-gray-100 md:text-5xl">
        {title}
      </h1>
      <div className="mt-4 flex flex-row items-center space-x-2 text-gray-500 dark:text-gray-400">
        <div className="flex flex-col">
          <div className="h-10 w-10 overflow-hidden rounded-full shadow">
            <Image src={hero} alt="Hero" placeholder="blur"></Image>
          </div>
        </div>
        <div className="flex flex-col text-sm">
          <p className="font-semibold">by Petr Rajtslegr</p>
          <div className="flex flex-row">
            <p>{parseDate(date)}</p>
          </div>
        </div>
      </div>
      {image && (
        <div className="mt-12 overflow-hidden rounded-lg text-[0px] shadow">
          <Image
            src={`/static/images/blog/${image}`}
            alt="Blog post header image"
            placeholder="blur"
            blurDataURL={`/static/images/blog/${image}`}
            height={720}
            width={1125}
          ></Image>
        </div>
      )}
      <div className="prose mt-12 max-w-none dark:prose-dark">
        <MDXRemote {...mdxContent} />
      </div>
    </article>
  </div>
);

export default PostLayout;
