import Image from 'next/image';
import MoreIcon from '../../public/more.png';

interface Prop {
  type: string;
}

const UserCard = ({ type }: Prop) => {
  return (
    <div className="odd:bg-pinkD even:bg-purpleD min-w-[130px] flex-1 rounded-2xl p-4 shadow-md">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white px-2 py-1 text-[10px] text-[#15ac72]">
          2024/25
        </span>
        <Image src={MoreIcon} alt="" width={20} height={20} />
      </div>

      <h1 className="my-4 text-2xl font-semibold">6,234</h1>
      <h2 className="text-sm font-medium capitalize text-gray-600">{type}</h2>
    </div>
  );
};

export default UserCard;
