import TableSearch from '@/components/TableSearch';
import Image from 'next/image';
import FilterImage from '../../../../../public/filter.png';
import SortImage from '../../../../../public/sort.png';
import PlusImage from '../../../../../public/plus.png';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import Link from 'next/link';
import { role, subjectsData } from '@/lib/data';
import { LuEye, LuTrash } from 'react-icons/lu';
import { GoPencil } from 'react-icons/go';

type Subject = {
  id: number;
  name: string;
  teachers?: string[];
};

const columns = [
  {
    header: 'Subject Name',
    accessor: 'name',
  },
  {
    header: 'Teachers',
    accessor: 'teachers',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'action',
  },
];

const SubjectListPage = () => {
  const renderRow = (item: Subject) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 text-sm even:bg-slate-100 hover:bg-[#e7f9ff]"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.teachers?.join(',')}</td>

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
        <h1 className="hidden text-lg font-semibold md:block">All Subjects</h1>

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
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default SubjectListPage;
