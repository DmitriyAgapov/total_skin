import '../assets/styles/styles.scss'
import Layout from "../components/layout";
import Head from 'next/head';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import theme from '../assets/theme';
// import createEmotionCache from '../assets/createEmotionCache';

import {StoreProvider} from '../components/StoreProvider'
// const clientSideEmotionCache = createEmotionCache();
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider
} from "@apollo/client";
// interface MyAppProps extends AppProps {
// 	emotionCache?: EmotionCache;
// }
// const client = new ApolloClient({
// 	uri: 'http://localhost:3000/api/graphql',
// 	cache: new InMemoryCache()
// });
// import {createClient, Provider} from 'urql';
import {AuthProvider} from '../components/auth';
import {useWindowSize} from "../utils";
import rootStore from "../stores/stores";

// export const client = createClient({
// 	url:
// 		typeof window === undefined
// 			? 'http://localhost:3000/api/graphql'
// 			: '/api/graphql',
// });

const MyApp = ({ Component, pageProps }) =>{



	return (
		// <Provider value={client}>
		// 	<AuthProvider>
		// <>
        // <Provider {...stores}>
		<StoreProvider {...pageProps}>
			{/*<CacheProvider value={emotionCache}>*/}
				<ThemeProvider theme={theme}>
					<Layout page={pageProps.page}>
						<CssBaseline/>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			{/*</CacheProvider>*/}
		</StoreProvider>
		// </>
		// </ApolloProvider>
		///*</AuthProvider>*/}

	)
}
export default MyApp