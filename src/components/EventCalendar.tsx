'use client';

import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ModeDarkImage from '../../public/moreDark.png';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: 'Complete Dashboard',
    time: '3:00 PM - 5:00 PM',
    description: 'Complete the dashboard UI by 5 PM today.',
  },
  {
    id: 2,
    title: 'Team Meeting',
    time: '9:00 AM - 10:00 AM',
    description: 'Discuss project progress and plan next steps with the team.',
  },
  {
    id: 3,
    title: 'Code Review',
    time: '11:00 AM - 12:00 PM',
    description: 'Review the pull requests submitted by the developers.',
  },
  {
    id: 4,
    title: 'Client Call',
    time: '1:00 PM - 2:00 PM',
    description: 'Update the client on the latest project milestones.',
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <Calendar onChange={onChange} value={value} />

      <div className="flex items-center justify-between">
        <h1 className="my-4 text-xl font-semibold">Events</h1>
        <Image src={ModeDarkImage} alt="More" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="rounded-md border-2 border-t-4 border-gray-100 p-5 odd:border-t-pinkD even:border-t-skyD"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-xs text-gray-400">{event.time}</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
