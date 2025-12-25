import { useCallback, useEffect, useState } from "react";
import type { ServiceError } from "../services/taskServices";

export interface AsyncState<T> {
    data: T | null;
    isLoading: boolean;
    error: ServiceError | null;
    refetch: () => void;
}

export function useAsyncData<T>(fetcher: () => Promise<T>): AsyncState<T> {
    
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<ServiceError | null>(null);

    const load = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await fetcher();
            setData(result);
        } catch (err) {
            setError(err as ServiceError);
        } finally {
            setIsLoading(false);
        }
    }, [fetcher]);

    useEffect(() => {
        void load();
    }, [load]);

    return {
        data,
        isLoading,
        error,
        refetch: load,
    };
}
