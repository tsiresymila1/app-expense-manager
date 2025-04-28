import useAuthStore from '@/lib/store/auth';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const link = createHttpLink({
    uri: process.env['EXPO_PUBLIC_API_URL'],
    credentials: 'same-origin'
});

const authLink = setContext((_, { headers }) => {
    const state = useAuthStore()
    return {
        headers: {
            ...headers,
            authorization: state.token ? `Bearer ${state.token}` : "",
        }
    }
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link)
});
export default function AppApolloProvider({ children }: { children: React.ReactNode }) {
    return <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
}