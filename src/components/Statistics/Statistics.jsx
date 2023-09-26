import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { getSavedDonation } from '../../utility/localStorage';

const Statistics = () => {
    const [totalDonate, setTotalDonate] = useState(0);

useEffect( () => {
    const getSavedDonations = getSavedDonation();
    const totalDonations = getSavedDonations.length;
    setTotalDonate(totalDonations);
}, [])

const data = [
    { name: 'Group A', value: (totalDonate / 12) * 100 },
    { name: 'Group B', value: 100 - (totalDonate / 12) * 100 },
];

const COLORS = ['#00C49F', '#FF444A'];

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
}) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            fontSize={26} // Adjust the fontSize here
            fontWeight="bold" // Adjust the fontWeight here
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart width={800} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className='gap-4 flex flex-col-reverse md:flex-row-reverse justify-center text-center mb-12'>
                <div className='flex mr-4'>
                    <h2 className='mr-4 font-bold text-xl'>Your Donation</h2>
                    <div className='bg-[#00C49F] px-10 py-1 rounded-lg md:w-[150px]'></div>
                </div>
                <div className='flex'>
                    <h2 className='mr-4 font-bold text-xl'>Total Donation</h2>
                    <div className='bg-[#FF444A] px-10 py-1 rounded-lg md:w-[150px]'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
