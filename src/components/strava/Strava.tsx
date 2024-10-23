import { ReactNode } from 'react';

import { Activity } from '@/types/entities';

import StravaCard from './StravaCard';

interface StravaProps {
  data?: Activity[];
}

const Strava = ({ data }: StravaProps) => {
  let render: ReactNode = (
    <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
      Strava data hit a bump in the road. It&apos;ll be back on track soon!
    </p>
  );

  if (Array.isArray(data)) {
    render = (
      <div className="grid gap-4 lg:grid-cols-2">
        {data?.map(
          ({
            id,
            type,
            name,
            distance,
            moving_time,
            total_elevation_gain,
            average_speed,
            average_heartrate,
          }) => (
            <StravaCard
              key={id}
              id={id}
              type={type}
              name={name}
              distance={distance}
              movingTime={moving_time}
              elevation={total_elevation_gain}
              averageSpeed={average_speed}
              averageHeartrate={average_heartrate}
            />
          ),
        )}
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4 mt-12 text-3xl font-bold dark:text-gray-100">
        Strava
      </h2>
      {render}
    </div>
  );
};

export default Strava;
