'use client';

import Image from 'next/image';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import ModeDarkImage from '../../public/moreDark.png';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 30,
    absent: 70,
  },
  {
    name: 'Wed',
    present: 50,
    absent: 50,
  },
  {
    name: 'Thu',
    present: 78,
    absent: 22,
  },
  {
    name: 'Fri',
    present: 89,
    absent: 11,
  },
  {
    name: 'Sat',
    present: 90,
    absent: 10,
  },
];

const AttendanceChart = () => {
  return (
    <div className="h-full w-full rounded-xl bg-white p-4 shadow-md">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src={ModeDarkImage} alt="More icon" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
          margin={{
            top: 5,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            stroke="#d1d5db"
            tickLine={false}
          />
          <YAxis axisLine={false} stroke="#d1d5db" tickLine={false} />
          <Tooltip
            cursor={{ fill: '#f8f8f8' }}
            contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
          />
          <Bar
            dataKey="absent"
            fill="#ccf1fc"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="present"
            fill="#fbcfe8"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
