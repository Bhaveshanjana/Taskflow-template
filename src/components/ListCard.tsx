import React from 'react';
import { Calendar, Flag, MoreHorizontal, User, CheckCircle2, Clock3, Filter } from 'lucide-react';
import { useListsData } from '../hooks/useListsData';
import { ListSkeleton } from './common/LoadingSkeleton';
import { ErrorMessage } from './common/ErrorMessage';
import type { ListTask, Priority, Status } from '../data/mockLists';

const statusBadgeClasses = (status: Status) => {
    switch (status) {
        case 'Completed':
            return 'bg-emerald-50 text-emerald-700 border border-emerald-100';
        case 'In Progress':
            return 'bg-orange-50 text-orange-700 border border-orange-100';
        case 'Backlog':
        default:
            return 'bg-slate-50 text-slate-700 border border-slate-100';
    }
};

const priorityBadgeClasses = (priority: Priority) => {
    switch (priority) {
        case 'High':
            return 'bg-red-50 text-red-700 border border-red-100';
        case 'Medium':
            return 'bg-amber-50 text-amber-700 border border-amber-100';
        case 'Low':
        default:
            return 'bg-slate-50 text-slate-700 border border-slate-100';
    }
};

const ListsTab: React.FC = () => {
    const { data, isLoading, error, refetch } = useListsData();

    if (isLoading) {
        return <ListSkeleton />;
    }

    if (error || !data) {
        return (
            <ErrorMessage
                title="Unable to load list tasks"
                message="We couldn’t load the task list. Please try again."
                onRetry={refetch}
            />
        );
    }

    const tasks: ListTask[] = data;

    const total = tasks.length;
    const completed = tasks.filter((t) => t.status === 'Completed').length;
    const inProgress = tasks.filter((t) => t.status === 'In Progress').length;
    const backlog = tasks.filter((t) => t.status === 'Backlog').length;

    return (
        <section className="bg-[#fafaf8] rounded-2xl p-4 space-y-4">
            {/* Small summary strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white rounded-xl border border-gray-200 px-3 py-2.5">
                    <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                        Total tasks
                    </p>
                    <p className="mt-1 text-lg text-gray-900">{total}</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 px-3 py-2.5">
                    <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                        In progress
                    </p>
                    <p className="mt-1 text-lg text-gray-900">{inProgress}</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 px-3 py-2.5">
                    <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                        Completed
                    </p>
                    <p className="mt-1 text-lg text-gray-900">{completed}</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 px-3 py-2.5">
                    <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                        Backlog
                    </p>
                    <p className="mt-1 text-lg text-gray-900">{backlog}</p>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-b border-gray-100">
                    <div>
                        <h2 className="text-sm font-medium text-gray-900 tracking-wide">
                            Task list
                        </h2>
                        <p className="text-xs text-gray-500">
                            Organized view of all tasks across projects.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
                            <Filter className="w-3.5 h-3.5" />
                            Filters
                        </button>
                        <button className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
                            Group by status
                        </button>
                        <button className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
                            Sort by due date
                        </button>
                    </div>
                </div>

                <div className="hidden md:grid grid-cols-[1.7fr_1fr_0.8fr_0.9fr_0.8fr_40px] gap-4 px-4 py-2 text-[11px] font-medium uppercase tracking-wide text-gray-400 border-b border-gray-100">
                    <span>Task</span>
                    <span>Project</span>
                    <span>Due</span>
                    <span>Priority</span>
                    <span>Status</span>
                    <span className="sr-only">Actions</span>
                </div>

                <div className="divide-y divide-gray-100">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className="px-4 py-3 hover:bg-gray-50/70 transition-colors"
                        >
                            <div className="grid grid-cols-1 md:grid md:grid-cols-[1.6fr_1fr_0.8fr_0.9fr_0.8fr_40px] gap-3 md:gap-4 items-center">
                                <div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-gray-300" />
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm text-gray-900">{task.title}</p>
                                                <span className="hidden sm:inline-flex text-[11px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
                                                    {task.id}
                                                </span>
                                            </div>
                                            <div className="mt-1 flex flex-wrap gap-3 text-[11px] text-gray-500">
                                                <span className="inline-flex items-center gap-1">
                                                    <User className="w-3.5 h-3.5 text-gray-400" />
                                                    {task.assignee}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-xs text-gray-500">
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 border border-gray-100">
                                        {task.project}
                                    </span>
                                </div>

                                <div className="flex items-center gap-1 text-xs text-gray-600">
                                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                                    {task.due}
                                </div>

                                <div className="text-xs">
                                    <span
                                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${priorityBadgeClasses(
                                            task.priority,
                                        )}`}
                                    >
                                        <Flag className="w-3.5 h-3.5" />
                                        {task.priority}
                                    </span>
                                </div>

                                <div className="text-xs">
                                    <span
                                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${statusBadgeClasses(
                                            task.status,
                                        )}`}
                                    >
                                        <Clock3 className="w-3.5 h-3.5" />
                                        {task.status}
                                    </span>
                                </div>

                                <button className="ml-auto p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                                    <MoreHorizontal className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ListsTab;
