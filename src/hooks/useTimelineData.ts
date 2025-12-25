import type { TimelineTaskData } from "../data/mockTimeline";
import { taskService } from "../services/taskServices";
import { useAsyncData } from "./useAsyncData";

export function useTimelineData() {
    return useAsyncData<TimelineTaskData[]>(taskService.fetchTimeline);
}