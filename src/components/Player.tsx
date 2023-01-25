import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { ReactComponent as NextIcon } from '../assets/icons/next.svg';
import { ReactComponent as PauseIcon } from '../assets/icons/pause.svg';
import { ReactComponent as PlayIcon } from '../assets/icons/play.svg';
import { ReactComponent as PreviousIcons } from '../assets/icons/previous.svg';

const Player = () => {
  return (
    <div className=" w-full bg-black bg-opacity-50 text-opacity-100  px-8 py-2 text-lg2 fixed bottom-0 left-0">
      <div className="w-full flex flex-row justify-between m-auto font-semibold md:text-lg">
        <div className="flex flex-row sm:mr-0 w-48  ">
          piosenka - z lasta
        </div>
        <div className="flex flex-row sm:mr-0 text-gray-300 ">
          <PreviousIcons className="h-10 px-2" />
          <PlayIcon className="h-10 px-2" />
          <NextIcon className="h-10 px-2" />
        </div>
        <div className="flex flex-row my-auto sm:mr-0 w-48 ">
          <hr className="w-full border-y-2" />
        </div>
      </div>
    </div>
  );
};

export default Player;
