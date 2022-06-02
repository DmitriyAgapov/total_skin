import '../assets/styles/styles.scss'
import Layout from "../components/layout";
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../assets/theme';
import {createClient, Provider} from 'urql';
import {StoreProvider} from '../components/StoreProvider'

import {AuthProvider} from '../components/auth';

export const client = createClient({
	url:
		typeof window === undefined
			? 'http://localhost:3000/api/graphql'
			: '/api/graphql',
});
const MyApp = ({Component, pageProps}) => {


	return (
		<Provider value={client}>
			<AuthProvider>
				<StoreProvider {...pageProps}>

					<ThemeProvider theme={theme}>
						<Layout page={pageProps.page}>
							<CssBaseline/>
							<Component {...pageProps} />
						</Layout>
					</ThemeProvider>
				</StoreProvider>
			</AuthProvider>
		</Provider>
	)
}
export default MyApp