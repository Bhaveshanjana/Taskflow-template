import type { FileData } from "../data/mockFiles";
import { taskService } from "../services/taskServices";
import { useAsyncData } from "./useAsyncData";

export function useFilesData() {
    return useAsyncData<FileData[]>(taskService.fetchFiles);
}