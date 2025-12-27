import { BOARD_COLUMNS, type BoardColumn } from "../data/mockBoard";
import { FILE_ITEMS, type FileData } from "../data/mockFiles";
import { LIST_TASK, type ListTask } from "../data/mockLists";
import { MOCK_STATS, type StatCardData } from "../data/mockOverViewStats";
import {
    STATUS_DATA,
    WEEKLY_DATA,
    type StatusDataPoint,
    type WeeklyDataPoint,
} from "../data/mockStatusBreakDown";
import { TIMELINE_TASK, type TimelineTaskData } from "../data/mockTimeline";

export interface ServiceError extends Error {
    code?: string;
}
const MIN_DELAY_MS = 400;
const MAX_DELAY_MS = 900; // simulate delay
const ERROR_RATE = 0.05; // 5% simulate error rate

const sleep = (ms: number) =>
    new Promise<void>((resolve) => {
        setTimeout(resolve, ms);
    });

// Similate network error
async function SimulatedNetwork<T>(value: T): Promise<T> {
    const delay = MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS);
    await sleep(delay);
    if (Math.random() < ERROR_RATE) {
        const error: ServiceError = new Error(
            "Similated network error. Please try again"
        );
        error.code = "SIMULATED_NETWORK_ERROR";
        throw error;
    }
    return value;
}

export const taskService = {
    async fetchStats(): Promise<StatCardData[]> {
        return SimulatedNetwork(MOCK_STATS);
    },

    async fetchStatusBreakdown(): Promise<StatusDataPoint[]> {
        return SimulatedNetwork(STATUS_DATA);
    },

    async fetchWeeklyProgress(): Promise<WeeklyDataPoint[]> {
        return SimulatedNetwork(WEEKLY_DATA);
    },

    async fetchTimeline(): Promise<TimelineTaskData[]> {
        return SimulatedNetwork(TIMELINE_TASK);
    },

    async fetchListTasks(): Promise<ListTask[]> {
        return SimulatedNetwork(LIST_TASK);
    },

    async fetchBoardColumns(): Promise<BoardColumn[]> {
        return SimulatedNetwork(BOARD_COLUMNS);
    },

    async fetchFiles(): Promise<FileData[]> {
        return SimulatedNetwork(FILE_ITEMS);
    },
};
