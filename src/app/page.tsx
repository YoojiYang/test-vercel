'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { fetchAllData } from './utils/utils';

export type RoomType = {
  id: number;
  name: string;
  company: string;
  scheduledArrival: Date;
  reserveAdultsCount: number;
  reserveChildrenCount: number;
  changedAdultsCount: number;
  changedChildrenCount: number;
};

export default function Home() {
  const [rooms, setRooms] = useState<RoomType[]>([]);

  useEffect(() => {
    fetchRooms(setRooms);
  }, []);
  
  const fetchRooms = async (setRooms: Dispatch<SetStateAction<RoomType[]>>) => {
    console.log('fetchRooms');
    try {
      const fetchedRooms = await fetchAllData("rooms");
      setRooms(fetchedRooms);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>test</h1>
      <button onClick={ () => fetchRooms(setRooms) }>テスト</button>
      <div>
        <p>
        rooms: {rooms[0]?.name}
        </p>
        <p>
        rooms: {rooms[0]?.company}
        </p>
        <p>
        rooms: {rooms[0]?.reserveAdultsCount}
        </p>
      </div>
    </div>
  )
}
