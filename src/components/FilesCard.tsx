import React from 'react';
import { FileText, Image, Folder, MoreHorizontal, Paperclip, HardDrive, Clock3 } from 'lucide-react';
import { useFilesData } from '../hooks/useFilesData';
import { FilesSkeleton } from './common/LoadingSkeleton';
import { ErrorMessage } from './common/ErrorMessage';
import type { FileData, FileKind } from '../data/mockFiles';

const iconForKind = (kind: FileKind) => {
    switch (kind) {
        case 'image':
            return Image;
        case 'folder':
            return Folder;
        case 'doc':
        default:
            return FileText;
    }
};

const FilesTab: React.FC = () => {
    const { data, isLoading, error, refetch } = useFilesData();

    if (isLoading) {
        return <FilesSkeleton />;
    }

    if (error || !data) {
        return (
            <ErrorMessage
                title="Unable to load files"
                message="We couldn’t load project files. Please try again."
                onRetry={refetch}
            />
        );
    }

    const files: FileData[] = data;

    const totalFiles = files.length;
    const docs = files.filter((f) => f.kind === 'doc').length;
    const images = files.filter((f) => f.kind === 'image').length;

    return (
        <section className="bg-[#fafaf8] rounded-2xl p-4 space-y-4">
            {/* Storage / file summary */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-white rounded-xl border border-gray-200 px-3 py-2.5 flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-gray-900/5">
                        <HardDrive className="w-4 h-4 text-gray-700" />
                    </div>
                    <div>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                            Storage used
                        </p>
                        <p className="mt-1 text-lg text-gray-900">2.1 GB / 10 GB</p>
                        <div className="mt-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                            <div className="h-full w-2/5 rounded-full bg-gray-900" />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 px-3 py-2.5">
                    <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                        Files in project
                    </p>
                    <p className="mt-1 text-lg text-gray-900">{totalFiles}</p>
                    <p className="mt-1 text-[11px] text-gray-500">
                        {docs} docs • {images} assets
                    </p>
                </div>
                <div className="hidden md:flex bg-white rounded-xl border border-gray-200 px-3 py-2.5 items-center justify-between">
                    <div>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                            Recent activity
                        </p>
                        <p className="mt-1 text-xs text-gray-600">
                            Last file updated {files[0]?.updatedAt}.
                        </p>
                    </div>
                    <Clock3 className="w-4 h-4 text-gray-500" />
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-b border-gray-100">
                    <div>
                        <h2 className="text-sm font-medium text-gray-900 tracking-wide">
                            Project files
                        </h2>
                        <p className="text-xs text-gray-500">
                            Keep specs, assets and documents in one place.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <button className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
                            Sort by last updated
                        </button>
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800">
                            <Paperclip className="w-3.5 h-3.5" />
                            Upload
                        </button>
                    </div>
                </div>

                <div className="hidden md:grid grid-cols-[1.4fr_0.7fr_0.8fr_0.9fr_40px] gap-4 px-4 py-2 text-[11px] font-medium uppercase tracking-wide text-gray-400 border-b border-gray-100">
                    <span>Name</span>
                    <span>Type</span>
                    <span>Owner</span>
                    <span>Last updated</span>
                    <span className="sr-only">Actions</span>
                </div>

                <div className="divide-y divide-gray-100">
                    {files.map((file) => {
                        const Icon = iconForKind(file.kind);
                        return (
                            <div
                                key={file.id}
                                className="px-4 py-3 hover:bg-gray-50/70 transition-colors"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.7fr_0.8fr_0.9fr_40px] gap-3 md:gap-4 items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 border border-gray-100">
                                            <Icon className="w-4 h-4 text-gray-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-900">{file.name}</p>
                                            <p className="mt-0.5 text-[11px] text-gray-400">
                                                {file.id} • {file.size}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-xs text-gray-500">
                                        {file.kind === 'doc' && 'Document'}
                                        {file.kind === 'image' && 'Image'}
                                        {file.kind === 'folder' && 'Folder'}
                                    </div>

                                    <div className="text-xs text-gray-600">{file.owner}</div>

                                    <div className="flex items-center gap-2 text-xs text-gray-600">
                                        <span>{file.updatedAt}</span>
                                        {file.badge && (
                                            <span className="px-2 py-0.5 rounded-full bg-gray-50 border border-gray-100 text-[11px] text-gray-500">
                                                {file.badge}
                                            </span>
                                        )}
                                    </div>

                                    <button className="ml-auto p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FilesTab;
