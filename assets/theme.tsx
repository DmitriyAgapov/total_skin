import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: false; // removes the `xs` breakpoint
		sm: false;
		md: false;
		lg: false;
		xl: false;

	}
}
// Create a theme instance.
const theme = createTheme({

	typography: {
		fontFamily: 'Montserrat',
		allVariants: {
			lineHeight: 1.65
		}
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
	components: {

		MuiOutlinedInput: {
			defaultProps: {
				style: {

					minHeight: "initial",
					borderRadius: 0,
					backgroundColor: '#ECEFF8'

				}
			}
		},
		MuiSelect: {
			variants: [
				{
					props: { variant: 'standard' },
					style: {
						// "::before":
						display: 'flex',
						// minHeight: '3rem',
						alignItems: 'center',
						lineHeight: '2.5rem'

					},
				},

			],
		},
	},
	palette: {
		text: {
			primary: '#14161C',
		},
		primary: {
			main: '#232B49',

		},
		secondary: {
			main: '#9DAFBD',
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;