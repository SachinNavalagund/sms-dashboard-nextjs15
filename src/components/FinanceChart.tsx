'use client';

import Image from 'next/image';
import ModeDarkImage from '../../public/moreDark.png';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Aug',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Sep',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Oct',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Nov',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Dec',
    income: 3490,
    expense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="h-full w-full rounded-xl bg-white p-4 shadow-md">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src={ModeDarkImage} alt="More icon" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            tickLine={false}
            stroke="#d1d5db"
            axisLine={false}
            tickMargin={10}
          />
          <YAxis
            tickLine={false}
            stroke="#d1d5db"
            axisLine={false}
            tickMargin={10}
          />
          <Tooltip
            cursor={{ fill: '#f8f8f8' }}
            contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: '0px', paddingBottom: '20px' }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#C6E7FF"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#d8b4fe"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
