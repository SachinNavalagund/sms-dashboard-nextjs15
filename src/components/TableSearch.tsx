import Image from 'next/image';
import SearchIcon from '../../public/search.png';

const TableSearch = () => {
  return (
    <div className="flex w-full items-center gap-2 rounded-full px-2 text-xs ring-[1.5px] ring-gray-300 md:flex md:w-auto">
      <Image
        src={SearchIcon}
        alt="Search icon"
        width={14}
        height={14}
        className="object-contain"
      />
      <input
        type="text"
        placeholder="Search..."
        className="w-[300px] bg-transparent p-2 outline-none"
      />
    </div>
  );
};

export default TableSearch;
