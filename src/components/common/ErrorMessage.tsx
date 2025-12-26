import type React from "react";

interface ErrorMessageProps {
    title?: string;
    message?: string;
    onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ title = "Somthing went wrong", message = "We are unable to load this data, Please try again", onRetry, }) => {
    return (
        <div className="flex items-start justify-between rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
            <div>
                <p className="font-medium">{title}</p>
                <p className="mt-1 text-xs text-red-600/80">{message}</p>
            </div>
            {onRetry && (
                <button
                    type="button"
                    onClick={onRetry}
                    className="ml-4 inline-flex items-center rounded-lg border border-red-200 bg-white px-3 py-1.5 text-xs font-medium text-red-700 shadow-sm hover:bg-red-50"
                >
                    Try again
                </button>
            )}
        </div>
    )
}