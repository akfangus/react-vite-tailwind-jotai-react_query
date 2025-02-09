import { QueryClient } from '@tanstack/react-query';
import { TimeUnit } from './timeUnit';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: TimeUnit.Minutes(3),
        },
    },
});
