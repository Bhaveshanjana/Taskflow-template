import type { BoardColumn } from "../data/mockBoard";
import { taskService } from "../services/taskServices";
import { useAsyncData } from "./useAsyncData";

export function useBoardData() {
    return useAsyncData<BoardColumn[]>(taskService.fetchBoardColumns);
}
