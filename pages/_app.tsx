import '../assets/styles/styles.scss'
import Layout from "../components/layout";
import Head from 'next/head';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import theme from '../assets/theme';
import createEmotionCache from '../assets/createEmotionCache';
import {observer, Provider} from "mobx-react";
import MenuStore from "../stores/options";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

// import {createClient, Provider} from 'urql';
import {AuthProvider} from '../components/auth';

// export const client = createClient({
// 	url:
// 		typeof window === undefined
// 			? 'http://localhost:3000/api/graphql'
// 			: '/api/graphql',
// });

const MyApp = (props: MyAppProps) =>{
// export default function MyApp({Component, pageProps: pageProps}) {

	const {Component, emotionCache = clientSideEmotionCache, pageProps, stores = {MenuStore} } = props;

	return (
		// <Provider value={client}>
		// 	<AuthProvider>
        <Provider {...stores}>
			<CacheProvider value={emotionCache}>
				<Head>
					<meta name="viewport" content="initial-scale=1, width=device-width"/>
				</Head>
				<ThemeProvider theme={theme}>
					<Layout page={pageProps.page}>
						<CssBaseline/>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</CacheProvider>
        </Provider>
		///*</AuthProvider>*/}
		// </Provider>
	)
}
export default MyApp