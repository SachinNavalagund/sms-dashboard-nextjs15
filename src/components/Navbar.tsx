import Image from 'next/image';
import SearchIcon from '../../public/search.png';
import MessageIcon from '../../public/message.png';
import AnnouncementIcon from '../../public/announcement.png';
import AvatarIcon from '../../public/avatar.png';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search bar */}
      <div className="hidden items-center gap-2 rounded-full px-2 text-xs ring-[1.5px] ring-gray-300 md:flex">
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

      {/* Icons and User */}
      <div className="flex w-full items-center justify-end gap-6">
        <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white">
          <Image
            src={MessageIcon}
            alt="Search icon"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>

        <div className="relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white">
          <Image
            src={AnnouncementIcon}
            alt="Search icon"
            width={20}
            height={20}
            className="object-contain"
          />
          <div className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-purple-500 text-xs text-white"/>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3">Ava East</span>
          <span className="text-right text-[10px] text-gray-500">Admin</span>
        </div>

        <Image
          src={AvatarIcon}
          alt="Search icon"
          width={36}
          height={36}
          className="rounded-full object-contain"
        />
      </div>
    </div>
  );
};

export default Navbar;
