import type { StatCardProps } from "../types"

export type StateCardData = Omit<StatCardProps, 'icon'>;

export const MOCK_STATS: StateCardData[] = [
    {
        title: 'Total Tasks',
        value: '147 task',
        subtitle: 'Tasks moved, comments & edits',
        trend: '+15% from last week',
        trendUp: true,
    },
    {
        title: 'Tasks Completed',
        value: '89 task',
        subtitle: 'Finished successfully by team',
        trend: '+10% from last week',
        trendUp: true,
    },
    {
        title: 'Tasks In Progress',
        value: '42 task',
        subtitle: 'Currently being worked on',
        trend: '-3% from last week',
        trendUp: false,
    },
    {
        title: 'Tasks Due Today',
        value: '42 task',
        subtitle: 'Currently being worked on',
        trend: '-3% from last week',
        trendUp: false,
    },
]