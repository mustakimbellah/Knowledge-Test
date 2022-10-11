import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const Statistics = () => {
    const totalData = useLoaderData();
    return (
        <div className='statistics-container'>
            <h2>Statics</h2>

            <LineChart
                width={500}
                height={300}
                data={totalData.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />

            </LineChart>


        </div>
    );
};

export default Statistics;