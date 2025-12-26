import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
} from 'recharts';
import { useStatusBreakdown, useWeeklyProcess } from '../hooks/useStatusBreakdown';
import { ChartSkeleton } from './common/LoadingSkeleton';
import { ErrorMessage } from './common/ErrorMessage';
import type {
    StatusDataPoint,
    WeeklyDataPoint,
} from '../data/mockStatusBreakDown';

const CustomTooltip = ({
    active,
    payload,
}: {
    active?: boolean;
    payload?: Array<{ name: string; value: number }>;
}) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-900 text-white text-xs p-3 rounded-lg shadow-xl min-w-[120px]">
                {payload.map((entry, index) => {
                    if (entry.name === 'progress') {
                        return (
                            <div key={index} className="mb-1">
                                <span className="text-gray-400">Progress: </span>
                                <span className="font-semibold">{entry.value}%</span>
                            </div>
                        )
                    }
                    if (entry.name === 'completed') {
                        return (
                            <div key={index}>
                                <span className="text-gray-400">Compilated: </span>
                                <span className="font-semibold">{entry.value}</span>
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        );
    }
    return null;
};

export const StatusBreakdownChart: React.FC = () => {
    const { data, isLoading, error, refetch } = useStatusBreakdown();

    if (isLoading) {
        return <ChartSkeleton />;
    }

    if (error || !data) {
        return (
            <ErrorMessage
                title="Unable to load status breakdown"
                message="We couldn’t load task status analytics. Please try again."
                onRetry={refetch}
            />
        );
    }

    const statusData: StatusDataPoint[] = data;

    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
                <h3 className="  text-gray-900">Task Status Breakdown <span className="font-normal text-gray-500 text-sm">(12 Months)</span></h3>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        <span className="text-gray-500 font-normal">InProgress</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200">
                        <span className="w-2 h-2 rounded-full bg-[#A8A29E]"></span>
                        <span className="text-gray-500 font-normal">Pending</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200">
                        <span className="w-2 h-2 rounded-full bg-[#C7D2FE]"></span>
                        <span className="text-gray-500 font-normal">Completed</span>
                    </div>
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={statusData}
                        barSize={4}
                        barCategoryGap={12}
                        margin={{ top: 10, right: 0, left: -30, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#6B7280' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#6B7280' }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                        {/* Order matches stack visually: Completed (Purple), Pending (Gray), Progress (Orange) */}
                        <Bar dataKey="completed" stackId="a" fill="#C7D2FE" radius={[999, 999, 999, 999]} />
                        <Bar dataKey="pending" stackId="a" fill="#A8A29E" radius={[999, 999, 999, 999]} />
                        <Bar dataKey="inProgress" stackId="a" fill="#F97316" radius={[999, 999, 999, 999]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export const WeeklyProgressChart: React.FC = () => {
    const { data, isLoading, error, refetch } = useWeeklyProcess();

    if (isLoading) {
        return <ChartSkeleton />;
    }

    if (error || !data) {
        return (
            <ErrorMessage
                title="Unable to load weekly progress"
                message="We couldn’t load weekly progress analytics. Please try again."
                onRetry={refetch}
            />
        );
    }

    const currentWeekData: WeeklyDataPoint[] = data;

    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
                <h3 className="text-gray-900">
                    Weekly Task Progress{" "}
                </h3>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={currentWeekData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#818CF8" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#818CF8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#6B7280' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#6B7280' }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F3F4F6', opacity: 0.4 }} />

                        {/* The Area is for the subtle purple gradient fill */}
                        <Area
                            type="monotone"
                            dataKey="progress"
                            stroke="none"
                            fill="url(#colorProgress)"
                        />

                        {/* The Bars are thin vertical lines representing 'Compilated' (Completed) */}
                        {/* In the image these look like background bars. We'll use a very light gray. */}
                        <Bar
                            dataKey="completed"
                            barSize={2}
                            fill="#E5E7EB"
                            radius={[2, 2, 0, 0]}
                        />

                        {/* The Line is the main 'Progress' metric */}
                        <Line
                            type="monotone"
                            dataKey="progress"
                            stroke="#F97316"
                            strokeWidth={2}
                            dot={{ r: 4, strokeWidth: 2, fill: '#FFFFFF', stroke: '#F97316' }}
                            activeDot={{ r: 6, strokeWidth: 2, fill: '#F97316', stroke: '#fff' }}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};


