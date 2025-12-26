import React from 'react';
import { ClipboardList, Plus } from 'lucide-react';
import { useTimelineData } from '../hooks/useTimelineData';
import { TimelineSkeleton } from './common/LoadingSkeleton';
import { ErrorMessage } from './common/ErrorMessage';
import type { TimelineTaskData } from '../data/mockTimeline';

interface TimelineTaskProps {
    title: string;
    duration: string;
    start: number;
    span: number;
    userImages: string[];
}

const TimelineTask: React.FC<TimelineTaskProps> = (props: TimelineTaskProps) => {
    const { title, duration, start, span, userImages } = props;
    return (
        <div className="grid grid-cols-12 items-center gap-4 rounded-lg px-2 py-4 transition-colors hover:bg-gray-50/50">
            <div className="col-span-3 text-sm font-medium text-gray-600 lg:col-span-2">
                {title}
            </div>

            <div className="col-span-9 relative flex h-12 items-center lg:col-span-10">
                <div
                    className="relative z-10 flex items-center justify-between rounded-lg bg-[#fafaf8]"
                    style={{
                        width: `${span * 10}%`,
                        marginLeft: `${(start - 1) * 10}%`,
                    }}
                >
                    <div className="m-1 flex h-12 w-full items-center justify-between rounded-lg border border-gray-200 bg-[#f9fafc] px-3">
                        <span className="text-xs font-medium text-gray-500">
                            {duration}
                        </span>
                        <div className="flex -space-x-2">
                            {userImages.map((src: string, i: number) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt="Assignee"
                                    className="h-6 w-6 rounded-full border-2 border-white ring-1 ring-gray-100"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Timeline: React.FC = () => {
    const { data, isLoading, error, refetch } = useTimelineData();

    if (isLoading) {
        return <TimelineSkeleton />;
    }

    if (error || !data) {
        return (
            <ErrorMessage
                title="Unable to load timeline"
                message="We couldn’t load your timeline tasks. Please try again."
                onRetry={refetch}
            />
        );
    }

    const tasks: TimelineTaskData[] = data;

    return (
        <div className="mt-8 rounded-2xl bg-[#fafaf8] p-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 w-7 h-7 bg-[#fafaf8] rounded-full text-gray-900">
                            <ClipboardList className="w-4 h-4 text-gray-400" />
                        </div>
                        <h3 className="text-md  text-gray-900  tracking-wider">
                            My Tasks <span className="text-gray-400 font-normal normal-case ml-1">(04)</span>
                        </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 sm:gap-6 sm:text-sm">
                        <span className="cursor-pointer font-normal text-gray-900">
                            Today
                        </span>
                        <span className="cursor-pointer font-normal hover:text-gray-900">
                            Tomorrow
                        </span>
                        <span className="cursor-pointer font-normal hover:text-gray-900">
                            Upcoming
                        </span>
                        <button
                            className="ml-2 rounded-full border border-gray-200 p-1 hover:bg-gray-100"
                            aria-label="Add task"
                        >
                            <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Desktop timeline with grid background */}
                <div className="relative hidden md:block">
                    <div className="pointer-events-none absolute inset-0 grid grid-cols-12 gap-4">
                        <div className="col-span-3 lg:col-span-2" />
                        <div className="col-span-9 grid grid-cols-10 lg:col-span-10">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-full border-l-2 border-dotted border-gray-300 first:border-l-0"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="relative space-y-2">
                        {tasks.map((task) => (
                            <TimelineTask
                                key={task.id}
                                title={task.title}
                                duration={task.duration}
                                start={task.start}
                                span={task.span}
                                userImages={task.userImages}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile-friendly stacked list */}
                <div className="space-y-3 md:hidden">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className="flex flex-col gap-3 rounded-lg border border-gray-100 bg-gray-50 px-3 py-3"
                        >
                            <div className="flex items-center justify-between gap-2">
                                <p className="text-sm font-medium text-gray-900">
                                    {task.title}
                                </p>
                                <span className="text-[11px] text-gray-500">
                                    {task.duration}
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                                    <div
                                        className="h-full rounded-full bg-[#A5B4FC]"
                                        style={{
                                            width: `${(task.span / 10) * 100}%`,
                                        }}
                                    />
                                </div>
                                <div className="flex -space-x-2">
                                    {task.userImages.map((src) => (
                                        <img
                                            key={src}
                                            src={src}
                                            alt="Assignee"
                                            className="h-6 w-6 rounded-full border-2 border-white ring-1 ring-gray-100"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
