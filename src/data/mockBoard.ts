export interface BoardTask {
    id: string;
    title: string;
    assignees: string[];
    tag?: string;
}

export interface BoardColumn {
    id: string;
    title: string;
    count: number;
    color: string;
    tasks: BoardTask[];
}

export const BOARD_COLUMNS: BoardColumn[] = [
    {
        id: "backlog",
        title: "Backlog",
        count: 6,
        color: "bg-slate-100 text-slate-700",
        tasks: [
            {
                id: "TASK-030",
                title: "Collect requirements from stakeholders",
                assignees: ["CH", "SN"],
            },
            {
                id: "TASK-041",
                title: "Define success metrics",
                assignees: ["GH"],
                tag: "Analytics",
            },
        ],
    },
    {
        id: "in-progress",
        title: "In Progress",
        count: 4,
        color: "bg-orange-50 text-orange-700",
        tasks: [
            {
                id: "TASK-052",
                title: "Build reporting widgets",
                assignees: ["CH", "CF"],
                tag: "Frontend",
            },
            {
                id: "TASK-063",
                title: "Implement task reminders",
                assignees: ["DL"],
            },
        ],
    },
    {
        id: "review",
        title: "Review & Done",
        count: 5,
        color: "bg-emerald-50 text-emerald-700",
        tasks: [
            {
                id: "TASK-070",
                title: "Update empty states",
                assignees: ["SN"],
            },
            {
                id: "TASK-071",
                title: "Document new workflow",
                assignees: ["GH", "DL"],
                tag: "Docs",
            },
        ],
    },
];
