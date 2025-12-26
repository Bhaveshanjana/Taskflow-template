import { Component, type ErrorInfo, type ReactNode } from 'react';
import { ErrorMessage } from './ErrorMessage';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    public state: ErrorBoundaryState = {
        hasError: false,
    };

    public static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // eslint-disable-next-line no-console
        console.error('Uncaught error in component tree:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <ErrorMessage
                    title="A render error occurred"
                    message="Please refresh the page or try again later."
                />
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;


