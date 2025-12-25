import type { StatusDataPoint, WeeklyDataPoint } from "../data/mockStatusBreakDown";
import { taskService } from "../services/taskServices";
import { useAsyncData } from "./useAsyncData";

export function useStatusBreakdown() {
    return useAsyncData<StatusDataPoint[]>(taskService.fetchStatusBreakdown);
}
export function useWeeklyProcess() {
    return useAsyncData<WeeklyDataPoint[]>(taskService.fetchWeeklyProgress);
}