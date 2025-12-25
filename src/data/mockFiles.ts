export type FileKind = "doc" | "image" | "folder";

export interface FileData {
    id: string;
    name: string;
    kind: FileKind;
    size: string;
    updatedAt: string;
    owner: string;
    badge?: string;
}

export const FILE_ITEMS: FileData[] = [
    {
        id: 'FILE-001',
        name: 'Sprint 14 - Task breakdown.xlsx',
        kind: 'doc',
        size: '248 KB',
        updatedAt: 'Today, 09:10 AM',
        owner: 'Courtney Henry',
        badge: 'Sprint',
    },
    {
        id: 'FILE-002',
        name: 'Stakeholder notes.md',
        kind: 'doc',
        size: '32 KB',
        updatedAt: 'Yesterday, 04:20 PM',
        owner: 'Devon Lane',
    },
    {
        id: 'FILE-003',
        name: 'Dashboard concepts',
        kind: 'folder',
        size: '8 items',
        updatedAt: '2 days ago',
        owner: 'Savannah Nguyen',
    },
    {
        id: 'FILE-004',
        name: 'Timeline-preview.png',
        kind: 'image',
        size: '1.4 MB',
        updatedAt: 'Dec 10',
        owner: 'Guy Hawkins',
    },
]