'use client';

import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';

const ParentPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full rounded-md bg-white p-4 shadow-md">
          <h1 className="text-xl font-semibold">Schedule (John Doe)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* Right */}
      <div className="flex w-full flex-col gap-4 xl:w-1/3">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
