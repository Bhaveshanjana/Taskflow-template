import React from 'react';
import { MoreVertical, Zap, CheckSquare, Layout, Calendar } from 'lucide-react';
import type { StatCardProps } from '../types';
import { useTaskData } from '../hooks/useTaskData';
import { ErrorMessage } from './common/ErrorMessage';
import type { StatCardData } from '../data/mockOverViewStats';
import { StatsCardsSkeleton } from './common/LoadingSkeleton';

const ICONS = [Zap, CheckSquare, Layout, Calendar];

const StatsCards: React.FC = () => {
    const { data, isLoading, error, refetch } = useTaskData();

    if (isLoading) {
        return <StatsCardsSkeleton />;
    }

    if (error || !data) {
        return (
            <ErrorMessage
                title="Unable to load task stats"
                message="There was a problem loading your task overview. Please try again."
                onRetry={refetch}
            />
        );
    }

    const statsWithIcons: StatCardProps[] = data.map(
        (stat: StatCardData, index: number) => ({
            ...stat,
            icon: ICONS[index] ?? Zap,
        }),
    );

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {statsWithIcons.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl border-px border-gray-200 flex flex-col">
                    {/* Card Body */}
                    <div className="p-4 flex-1">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs  text-gray-400">{stat.title}</span>
                            <button
                                className="text-gray-900 hover:text-gray-600 -mr-2"
                                aria-label="Open card menu"
                                title="Open card menu"
                            >
                                <MoreVertical className="w-4 h-4 cursor-pointer" />
                            </button>
                        </div>

                        <h3 className="text-2xl  text-gray-900 mb-4">{stat.value}</h3>
                        <p className="text-xs text-gray-400">{stat.subtitle}</p>
                    </div>

                    {/* Card Footer */}
                    <div className="bg-[#FAFAFA] px-6 py-4  rounded-b-xl flex items-center gap-3">
                        <div className={`p-1 rounded-full  bg-white`}>
                            <stat.icon className="w-3.5 h-3.5 text-gray-700" strokeWidth={2} />
                        </div>
                        <span className=" text-sm  text-gray-700">
                            {stat.trend}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;