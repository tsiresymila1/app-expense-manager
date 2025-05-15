import { authClient } from '@/lib/auth';
import useAuthStore from '@/lib/store/auth';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


export default function AppApolloProvider({ children }: { children: React.ReactNode }) {
    const link = createHttpLink({
        uri: process.env['EXPO_PUBLIC_API_URL'],
        credentials: 'same-origin'
    });

    const authLink = setContext((_, { headers }) => {
        const state = useAuthStore.getState();
        const cookies = authClient.getCookie();
        return {
            headers: {
                ...headers,
                "x-api-token": state.token ?? "", 
                "Cookie": cookies,
            }
        }
    });
    const client = new ApolloClient({ 
        cache: new InMemoryCache(),
        link: authLink.concat(link)
    });
    return <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
}