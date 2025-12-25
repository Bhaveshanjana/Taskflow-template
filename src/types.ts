import type React from "react";

export interface StatCardProps {
    title: string;
    value: string;
    subtitle: string;
    trend: string;
    trendUp: boolean;
    icon: React.ElementType;
}
export interface Task {
    id: string;
    name: string;
    duration: string;
    assignees: string[];
    status: 'research' | 'design' | 'wireframe';
    startColoumn: number;
    span: number;
}