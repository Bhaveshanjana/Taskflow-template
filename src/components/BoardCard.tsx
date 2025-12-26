import React from 'react';
import { MoreHorizontal, Plus, User, BarChart2, Clock3, ListChecks } from 'lucide-react';
import { useBoardData } from '../hooks/useBoardData';
import { BoardSkeleton } from './common/LoadingSkeleton';
import { ErrorMessage } from './common/ErrorMessage';
import type { BoardColumn } from '../data/mockBoard';

const BoardTab: React.FC = () => {
    const { data, isLoading, error, refetch } = useBoardData();

    if (isLoading) {
        return <BoardSkeleton />;
    }

    if (error || !data) {
        return (
            <ErrorMessage
                title="Unable to load board"
                message="We couldn’t load the Kanban board. Please try again."
                onRetry={refetch}
            />
        );
    }

    const columns: BoardColumn[] = data;

    const totalCards = columns.reduce(
        (sum, col) => sum + col.tasks.length,
        0,
    );
    const inProgress = columns.find((c) => c.id === 'in-progress')?.tasks.length ?? 0;
    const done = columns.find((c) => c.id === 'review')?.tasks.length ?? 0;

    return (
        <section className="bg-[#fafaf8] rounded-2xl p-4 space-y-4">
            {/* Board insights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white rounded-xl border border-gray-200 px-3 py-2.5 flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-gray-900/5">
                        <BarChart2 className="w-4 h-4 text-gray-700" />
                    </div>
                    <div>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                            Cards on board
                        </p>
                        <p className="mt-1 text-lg text-gray-900">{totalCards}</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 px-3 py-2.5 flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-orange-500/10">
                        <Clock3 className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                            In progress
                        </p>
                        <p className="mt-1 text-lg text-gray-900">{inProgress}</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 px-3 py-2.5 flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-emerald-500/10">
                        <ListChecks className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                            In review / done
                        </p>
                        <p className="mt-1 text-lg text-gray-900">{done}</p>
                    </div>
                </div>
                <div className="hidden md:flex bg-white rounded-xl border border-gray-200 px-3 py-2.5 items-center justify-between">
                    <div>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                            Focus mode
                        </p>
                        <p className="mt-1 text-xs text-gray-600">
                            Hide completed cards to reduce noise.
                        </p>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-[11px] text-gray-700 hover:bg-gray-50 cursor-pointer">
                        Toggle
                    </button>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-sm font-medium text-gray-900 tracking-wide">
                        Kanban board
                    </h2>
                    <p className="text-xs text-gray-500">
                        Visualize work-in-progress across stages.
                    </p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                    <button className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 cursor-pointer">
                        Compact
                    </button>
                    <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 cursor-pointer">
                        <Plus className="w-3.5 h-3.5" />
                        New task
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {columns.map((column) => (
                    <div
                        key={column.id}
                        className="bg-white rounded-xl border border-gray-200 flex flex-col max-h-[520px]"
                    >
                        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                            <div className="flex items-center gap-2">
                                <span
                                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-medium ${column.color}`}
                                >
                                    {column.count}
                                </span>
                                <span className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                                    {column.title}
                                </span>
                            </div>
                            <button
                                className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 cursor-pointer"
                                aria-label="Column actions"
                                title="Column actions"
                            >
                                <MoreHorizontal className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-3 space-y-3">
                            {column.tasks.map((task) => (
                                <article
                                    key={task.id}
                                    className="bg-gray-50 rounded-lg border border-gray-100 px-3 py-3 shadow-[0_1px_0_rgba(15,23,42,0.04)] hover:border-gray-200 hover:bg-gray-50/80 transition-colors"
                                >
                                    <header className="flex items-start justify-between gap-2 mb-2">
                                        <div>
                                            <p className="text-sm text-gray-900">{task.title}</p>
                                            <p className="mt-1 text-[11px] text-gray-400">{task.id}</p>
                                        </div>
                                    </header>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex -space-x-2">
                                            {task.assignees.map((initials) => (
                                                <span
                                                    key={initials}
                                                    className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-[10px] font-medium text-gray-700"
                                                >
                                                    {initials}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-[11px] text-gray-500">
                                            {task.tag && (
                                                <span className="px-2 py-0.5 rounded-full bg-white border border-gray-200">
                                                    {task.tag}
                                                </span>
                                            )}
                                            <span className="inline-flex items-center gap-1">
                                                <User className="w-3.5 h-3.5 text-gray-400" />
                                                {task.assignees.length}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ))}

                            <button className="mt-1 inline-flex items-center gap-1 text-[11px] text-gray-500 hover:text-gray-700 cursor-pointer">
                                <Plus className="w-3.5 h-3.5" />
                                Add card
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BoardTab;

