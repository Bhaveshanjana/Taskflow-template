export interface StatusDataPoint {
    name: string;
    inProgress: number;
    pending: number;
    completed: number;
}

export const STATUS_DATA: StatusDataPoint[] = [
    { name: "Jan", inProgress: 20, pending: 10, completed: 30 },
    { name: "Feb", inProgress: 25, pending: 15, completed: 35 },
    { name: "Mar", inProgress: 15, pending: 10, completed: 40 },
    { name: "Apr", inProgress: 30, pending: 20, completed: 25 },
    { name: "May", inProgress: 10, pending: 5, completed: 20 },
    { name: "Jun", inProgress: 20, pending: 15, completed: 45 },
    { name: "Jul", inProgress: 15, pending: 10, completed: 30 },
    { name: "Aug", inProgress: 25, pending: 20, completed: 40 },
    { name: "Sep", inProgress: 18, pending: 12, completed: 35 },
    { name: "Oct", inProgress: 28, pending: 18, completed: 45 },
    { name: "Nov", inProgress: 12, pending: 8, completed: 25 },
    { name: "Dec", inProgress: 10, pending: 5, completed: 20 },
];

export interface WeeklyDataPoint {
    name: string;
    completed: number;
    progress: number;
}

export const WEEKLY_DATA: WeeklyDataPoint[] = [
    { name: "Sun", completed: 30, progress: 32 },
    { name: "Mon", completed: 45, progress: 45 },
    { name: "Tue", completed: 78, progress: 78 },
    { name: "Wed", completed: 68, progress: 70 },
    { name: "Thu", completed: 72, progress: 76 },
    { name: "Fri", completed: 50, progress: 26 },
    { name: "Sat", completed: 48, progress: 50 },
];
