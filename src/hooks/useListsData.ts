import type { ListTask } from "../data/mockLists";
import { taskService } from "../services/taskServices";
import { useAsyncData } from "./useAsyncData";

export function useListsData() {
    return useAsyncData<ListTask[]>(taskService.fetchListTasks);
}