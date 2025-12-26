export const StatsCardsSkeleton: React.FC = () => (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
            <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="flex animate-pulse flex-col rounded-xl border border-gray-200 bg-white"
            >
                <div className="flex-1 p-4">
                    <div className="mb-2 flex items-start justify-between">
                        <div className="h-3 w-20 rounded bg-gray-100" />
                        <div className="h-4 w-4 rounded-full bg-gray-100" />
                    </div>
                    <div className="mb-4 h-6 w-24 rounded bg-gray-100" />
                    <div className="h-3 w-32 rounded bg-gray-100" />
                </div>
                <div className="flex items-center gap-3 rounded-b-xl bg-gray-50 px-6 py-4">
                    <div className="h-6 w-6 rounded-full bg-white" />
                    <div className="h-3 flex-1 rounded bg-gray-100" />
                </div>
            </div>
        ))}
    </div>
);

export const ListSkeleton: React.FC = () => (
    <div className="space-y-4 rounded-2xl bg-[#fafaf8] p-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="rounded-xl border border-gray-200 bg-white px-3 py-3"
                >
                    <div className="h-3 w-20 rounded bg-gray-100" />
                    <div className="mt-2 h-5 w-10 rounded bg-gray-100" />
                </div>
            ))}
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
                <div className="h-4 w-24 rounded bg-gray-100" />
                <div className="flex gap-2">
                    <div className="h-7 w-20 rounded-lg bg-gray-100" />
                    <div className="h-7 w-24 rounded-lg bg-gray-100" />
                    <div className="h-7 w-24 rounded-lg bg-gray-100" />
                </div>
            </div>
            <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        className="h-12 rounded-lg bg-gray-50"
                    />
                ))}
            </div>
        </div>
    </div>
);

export const ChartSkeleton: React.FC = () => (
    <div className="flex h-full animate-pulse flex-col rounded-xl border border-gray-200 bg-white p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
            <div className="h-4 w-40 rounded bg-gray-100" />
            <div className="hidden space-x-2 sm:flex">
                <div className="h-6 w-16 rounded-full bg-gray-100" />
                <div className="h-6 w-16 rounded-full bg-gray-100" />
                <div className="h-6 w-16 rounded-full bg-gray-100" />
            </div>
        </div>
        <div className="flex-1 rounded-lg bg-gray-50" />
    </div>
);

export const TimelineSkeleton: React.FC = () => (
    <div className="mt-8 rounded-2xl bg-[#fafaf8] p-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-gray-100" />
                    <div className="h-4 w-32 rounded bg-gray-100" />
                </div>
                <div className="flex gap-4">
                    <div className="h-4 w-10 rounded bg-gray-100" />
                    <div className="h-4 w-16 rounded bg-gray-100" />
                    <div className="h-8 w-8 rounded-full border border-gray-200 bg-gray-50" />
                </div>
            </div>
            <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-4"
                    >
                        <div className="h-4 w-20 rounded bg-gray-100" />
                        <div className="h-4 w-40 rounded bg-gray-100" />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const BoardSkeleton: React.FC = () => (
    <section className="space-y-4 rounded-2xl bg-[#fafaf8] p-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {Array.from({ length: 3 }).map((_, index) => (
                <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-3"
                >
                    <div className="h-7 w-7 rounded-full bg-gray-100" />
                    <div>
                        <div className="h-3 w-20 rounded bg-gray-100" />
                        <div className="mt-2 h-4 w-10 rounded bg-gray-100" />
                    </div>
                </div>
            ))}
            <div className="hidden items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-3 md:flex">
                <div>
                    <div className="h-3 w-20 rounded bg-gray-100" />
                    <div className="mt-2 h-3 w-32 rounded bg-gray-100" />
                </div>
                <div className="h-7 w-16 rounded-lg bg-gray-100" />
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div>
                <div className="h-4 w-24 rounded bg-gray-100" />
                <div className="mt-1 h-3 w-40 rounded bg-gray-100" />
            </div>
            <div className="flex gap-2">
                <div className="h-7 w-16 rounded-lg bg-gray-100" />
                <div className="h-7 w-20 rounded-lg bg-gray-100" />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
                <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="flex max-h-[520px] flex-col rounded-xl border border-gray-200 bg-white"
                >
                    <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-gray-100" />
                            <div className="h-3 w-24 rounded bg-gray-100" />
                        </div>
                        <div className="h-6 w-6 rounded-full bg-gray-100" />
                    </div>
                    <div className="flex-1 space-y-3 overflow-y-auto p-3">
                        {Array.from({ length: 3 }).map((_, inner) => (
                            <div
                                // eslint-disable-next-line react/no-array-index-key
                                key={inner}
                                className="h-20 rounded-lg bg-gray-50"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export const FilesSkeleton: React.FC = () => (
    <section className="space-y-4 rounded-2xl bg-[#fafaf8] p-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-3">
                <div className="h-7 w-7 rounded-full bg-gray-100" />
                <div>
                    <div className="h-3 w-24 rounded bg-gray-100" />
                    <div className="mt-1 h-4 w-32 rounded bg-gray-100" />
                </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white px-3 py-3">
                <div className="h-3 w-24 rounded bg-gray-100" />
                <div className="mt-2 h-4 w-10 rounded bg-gray-100" />
            </div>
            <div className="hidden items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-3 md:flex">
                <div>
                    <div className="h-3 w-24 rounded bg-gray-100" />
                    <div className="mt-1 h-3 w-32 rounded bg-gray-100" />
                </div>
                <div className="h-5 w-5 rounded-full bg-gray-100" />
            </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <div className="h-4 w-24 rounded bg-gray-100" />
                    <div className="mt-1 h-3 w-40 rounded bg-gray-100" />
                </div>
                <div className="flex gap-2">
                    <div className="h-7 w-28 rounded-lg bg-gray-100" />
                    <div className="h-7 w-20 rounded-lg bg-gray-100" />
                </div>
            </div>
            <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        className="h-14 rounded-lg bg-gray-50"
                    />
                ))}
            </div>
        </div>
    </section>
);