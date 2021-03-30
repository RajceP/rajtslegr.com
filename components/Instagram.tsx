import { IIgData } from '../types/types';

interface Props {
  data: IIgData;
}

const Instagram: React.FC<Props> = ({ data }) => {
  let render: JSX.Element | JSX.Element[] = (
    <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
      Error fetching data from Instagram.
    </p>
  );

  if (data) {
    render = (
      <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 w-full gap-4">
        {data?.data?.map((e, i) => {
          if (i < 9) {
            return (
              <div
                key={e.id}
                className={`${
                  i === 0 ? 'xl:row-span-2 xl:col-span-2' : null
                } relative pb-1/1 border rounded border-gray-600 shadow hover:shadow-lg transition`}
              >
                <a href={e.permalink} rel="noopener noreferrer" target="_blank">
                  <img
                    className="absolute h-full w-full object-cover"
                    src={e.thumbnail_url || e.media_url}
                    alt={e.caption}
                    width={328}
                    height={328}
                  />
                </a>
              </div>
            );
          }
        })}
      </div>
    );
  }

  return (
    <>
      <p className="text-4xl my-4">Instagram</p>
      {render}
    </>
  );
};

export default Instagram;
