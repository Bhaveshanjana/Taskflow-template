export type Priority = 'High' | 'Medium' | 'Low';

export type Status = 'In Progress' | 'Completed' | 'Backlog';

export interface ListTask {
    id: string;
    title: string;
    project: string;
    due: string;
    priority: Priority;
    status: Status;
    assignee: string;
}

export const LIST_TASK: ListTask[] = [
    {
        id: 'TASK-101',
        title: 'Design new dashboard layout',
        project: 'Atlas CRM Revamp',
        due: 'Today',
        priority: 'High',
        status: 'In Progress',
        assignee: 'Courtney Henry',
    },
    {
        id: 'TASK-094',
        title: 'Sync with data team about KPIs',
        project: 'Nimbus Dashboard',
        due: 'Tomorrow',
        priority: 'Medium',
        status: 'Backlog',
        assignee: 'Savannah Nguyen',
    },
    {
        id: 'TASK-078',
        title: 'Finalize sprint scope',
        project: 'Orion API Gateway',
        due: 'In 3 days',
        priority: 'High',
        status: 'In Progress',
        assignee: 'Guy Hawkins',
    },
    {
        id: 'TASK-066',
        title: 'QA pass on automation rules',
        project: 'Helio Task System',
        due: 'Next week',
        priority: 'Low',
        status: 'Completed',
        assignee: 'Devon Lane',
    },
    {
        id: 'TASK-059',
        title: 'Create design tokens for theme',
        project: 'Atlas CRM Revamp',
        due: 'No due date',
        priority: 'Medium',
        status: 'Backlog',
        assignee: 'Cody Fisher',
    },
];
