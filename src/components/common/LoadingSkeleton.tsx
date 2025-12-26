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