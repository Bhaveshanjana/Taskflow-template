
import type { StatCardData } from "../data/mockOverViewStats"
import { taskService } from "../services/taskServices";
import { useAsyncData } from "./useAsyncData";

export function useTaskData() {
    return useAsyncData<StatCardData[]>(taskService.fetchStats);
}