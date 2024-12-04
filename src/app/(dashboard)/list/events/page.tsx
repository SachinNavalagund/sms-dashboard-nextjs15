import TableSearch from '@/components/TableSearch';
import Image from 'next/image';
import FilterImage from '../../../../../public/filter.png';
import SortImage from '../../../../../public/sort.png';
import PlusImage from '../../../../../public/plus.png';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import Link from 'next/link';
import { eventsData, role } from '@/lib/data';
import { LuTrash } from 'react-icons/lu';
import { GoPencil } from 'react-icons/go';

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const columns = [
  {
    header: 'Title',
    accessor: 'title',
  },
  {
    header: 'Class',
    accessor: 'class',
  },
  {
    header: 'Date',
    accessor: 'date',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Start Time',
    accessor: 'startTime',
    className: 'hidden md:table-cell',
  },
  {
    header: 'End Time',
    accessor: 'endTime',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'action',
  },
];

const EventListPage = () => {
  const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 text-sm even:bg-slate-100 hover:bg-[#e7f9ff]"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td className="">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>

      <td className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="flex h-7 w-7 items-center justify-center rounded-full bg-skyL">
              <GoPencil size={16} className="text-gray-700" />
            </button>
          </Link>

          {role === 'admin' && (
            <button className="flex h-7 w-7 items-center justify-center rounded-full bg-pinkL">
              <LuTrash size={16} className="text-gray-700" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="m-4 mt-0 flex-1 rounded-md bg-white p-4">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden text-lg font-semibold md:block">All Events</h1>

        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <TableSearch />

          <div className="flex items-center gap-4 self-end">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-skyL">
              <Image src={FilterImage} alt="" width={14} height={14} />
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-skyL">
              <Image src={SortImage} alt="" width={14} height={14} />
            </button>

            {role === 'admin' && (
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-skyL">
                <Image src={PlusImage} alt="" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default EventListPage;
