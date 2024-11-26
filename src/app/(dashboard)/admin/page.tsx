import AttendanceChart from '@/components/AttendanceChart';
import CountChart from '@/components/CountChart';
import UserCard from '@/components/UserCard';

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {/* Left */}
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        {/* User Card */}
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="students" />
          <UserCard type="teachers" />
          <UserCard type="parents" />
          <UserCard type="staffs" />
        </div>

        {/* Middle charts */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Count Chart */}
          <div className="h-[450px] w-full lg:w-1/3">
            <CountChart />
          </div>

          {/* Attendance chart */}
          <div className="h-[450px] w-full lg:w-2/3">
            <AttendanceChart />
          </div>
        </div>

        {/* Bottom charts */}
        <div className=""></div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};

export default AdminPage;
