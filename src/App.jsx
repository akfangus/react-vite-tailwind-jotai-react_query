import { QueryClientProvider } from '@tanstack/react-query';
import Router from './shared/routes/Router';
import { queryClient } from './shared/libs/tanstack-query';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    );
}

export default App;
